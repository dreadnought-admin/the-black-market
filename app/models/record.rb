class Record < ApplicationRecord
    include AASM
    belongs_to :genre
    has_many :comments, dependent: :destroy
    has_many_and_belongs_to_many :cart

    aasm_initial_state :unread
    acts_as_audited :only => :state

    aasm_state :available
    aasm_state :purchased

    aasm_event :returned_by_buyer do
        transitions :to => :available, :from => [:purchased]
    end 

    aasm_event :purchsed_by_customer do
        transitions :to => :purchased, :from => [:available]
    end 

    def purchase_history
        history = []
        outstanding_purchases = {}
        full_history.each do |item|
            id = item.auditable_id
            if purchased_at = outstanding_purchases.keys.delete(id)
                history << {
                    :record_id => id,
                    :purchase_start => purchased_at,
                    :purchase_end => item.created_at
                }
            else
                outstanding_purchases[:id] = item.created_at
            end 
        end
        history << outstanding_purchases.collect{|key, value|} {:record_id => key,
        :purchase_start => value} 
    end   
end

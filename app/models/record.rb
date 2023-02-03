class Record < ApplicationRecord

    include AASM
    audited

    belongs_to :genre
    belongs_to :user

    has_many :comments, dependent: :destroy
    has_and_belongs_to_many :cart

    validates :album_name, presence: true
    validates :artist_name, presence: true
    validates :album_cover, presence: true
    validates :condition, presence: true
    validates :price, presence: true

    aasm do
        state :unread, :initial => true 

        state :available
        state :purchased

        event :returned_by_buyer do
            transitions from: :purchased, to: :available
        end 

        event :purchsed_by_customer do
            transitions from: :available, to: :purchased
        end 
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
        history << oustanding_rentals.collect{|key, value| {:record_id => key,  
            :purchase_start => value}}
    end
end
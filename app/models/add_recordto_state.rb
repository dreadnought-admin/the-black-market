class AddRecordtoState < ApplicationRecord

    def self.up
        add_column :records, :aasm_state, :string
      end
    
      def self.down
        remove_column :records, :aasm_state
      end
      
end

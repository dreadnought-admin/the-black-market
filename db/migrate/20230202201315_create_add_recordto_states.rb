class CreateAddRecordtoStates < ActiveRecord::Migration[7.0]
  def change
    create_table :add_recordto_states do |t|
        add_column :records, :aasm_state, :string
      t.timestamps
    end
  end
end

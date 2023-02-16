class CreateWatches < ActiveRecord::Migration[7.0]
  def change
    create_table :watches do |t|
      t.belongs_to :user
      t.belongs_to :record
      t.timestamps
    end
  end
end

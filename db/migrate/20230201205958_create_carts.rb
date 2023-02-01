class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :record, null: false, foreign_key: true

      t.timestamps
    end
  end
end

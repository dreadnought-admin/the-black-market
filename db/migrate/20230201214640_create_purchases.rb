class CreatePurchases < ActiveRecord::Migration[7.0]
  def change
    create_table :purchases do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.float :total
      t.string :status, default: "Your purchase is pending..."
      t.string :identifier


      t.timestamps
    end
  end
end

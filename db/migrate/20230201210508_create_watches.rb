class CreateWatches < ActiveRecord::Migration[7.0]
  def change
    create_table :watches do |t|
      t.references :user, null: false, foreign_key: true
      t.references :watched, polymorphic: true, null: false

      t.timestamps
    end
  end
end

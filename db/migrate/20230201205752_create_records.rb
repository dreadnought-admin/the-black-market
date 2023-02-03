class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.belongs_to :genre, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :album_name
      t.string :artist_name
      t.string :album_cover
      t.string :condition
      t.string :genre
      t.string :release_date
      t.string :release_description
      t.string :record_labels
      t.string :spotify_link, default: nil
      t.float :price
      t.boolean :in_stock

      t.timestamps
    end
  end
end

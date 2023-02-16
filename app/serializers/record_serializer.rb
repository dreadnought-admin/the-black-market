class RecordSerializer < ActiveModel::Serializer
  attributes :id, :album_name, :artist_name,
  :album_cover, :condition, :genre, :release_date, 
  :release_description, :record_labels, :spotify_link, :price, :in_stock
  
  #has_one :genre
  has_one :user
  #has_and_belongs_to_many :shopping_carts
end

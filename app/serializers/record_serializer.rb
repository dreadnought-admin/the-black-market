class RecordSerializer < ActiveModel::Serializer
  attributes :id, :album_name, :artist_name,
  :album_cover, :condition, :genre, :release_date, 
  :release_description, :record_labels, :spotify_link, :price,
  :user
  
  has_one :genre
  belongs_to :user
end

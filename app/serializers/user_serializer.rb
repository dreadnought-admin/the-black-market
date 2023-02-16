class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :bio, :instagram_handle, 
  :twitter_handle, :paypal_handle, :country, :avatar

  has_many :watches
  has_many :comments
end
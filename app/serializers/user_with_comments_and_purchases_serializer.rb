class UserWithCommentsAndPurchasesSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :role
  has_many :comments
  has_many :purchases
end

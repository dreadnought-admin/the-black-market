class UserWithCommentsAndPurchasesSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :role
  has_many :comments, dependent: :destroy
  has_many :purchases, dependent: :destroy
end

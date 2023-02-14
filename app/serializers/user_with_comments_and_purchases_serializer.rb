class UserWithCommentsAndPurchasesSerializer < ActiveModel::Serializer
  attributes :id, :user, :username, :email, :role
  has_many :comments, dependent: :destroy
  has_many :purchases, dependent: :destroy
end

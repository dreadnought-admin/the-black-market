class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_content
  has_one :user 
  has_one :record
end

class Chatroom < ApplicationRecord
    has_many :users, through: :messages
end

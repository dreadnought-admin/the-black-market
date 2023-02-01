class Watch < ApplicationRecord
  belongs_to :user
  belongs_to :watched, polymorphic: true
end

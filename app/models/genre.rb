class Genre < ApplicationRecord
    has_many :records, dependent: :destroy
end

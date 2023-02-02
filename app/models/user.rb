class User < ApplicationRecord

    audited
    
    has_many :carts, dependent: :destroy
    has_many :records, through: :carts
    has_associated_audits

    has_many :watches, dependent: :destroy
    has_many :watched_records, through: :watches, source: :watched, source_type: 'Record'

    has_many :comments, dependent: :destroy
    has_many :purchases, dependent: :destroy

    has_secure_password
    validates :username, presence: true, length: { maximum: 20 }, uniqueness: true
    validates :email, presence: :true, uniqueness: true
end

class User < ApplicationRecord
    has_many :watches
    has_many :watched_records, through: :watches, source: :watched, source_type: 'Record'

    has_many :full_history, :class_name => 'Audit', :as => :user,
    :conditions => {:auditable_type => "Record"}

    has_many :comments, dependent: :destroy
    has_many :carts
    has_many :records, through: :cart
    has_many :purchases

    has_secure_password
    validates :username, presence: true, length: { maximum: 10 }, uniqueiness: true
    validates :email, presence: :true, uniqueness: true
end

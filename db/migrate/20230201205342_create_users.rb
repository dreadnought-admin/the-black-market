class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :bio
      t.string :country
      t.string :instagram_handle
      t.string :twitter_handle
      t.string :paypal_handle
      t.string :avatar, default: "https://i.pinimg.com/474x/00/f0/a3/00f0a32118159c93483154be511769ed.jpg"
      t.string :password_digest
      t.string :email
      t.string :role, default: "user"

      t.timestamps
    end
  end
end

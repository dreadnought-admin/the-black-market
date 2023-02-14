class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :bio
      t.string :country
      t.string :instagram_handle
      t.string :twitter_handle
      t.string :avatar
      t.string :password_digest
      t.string :email
      t.string :paypal_handle
      t.string :role, default: "user"

      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :bio
      t.string :city
      t.string :state
      t.string :instagram_handle
      t.string :twitter_handle
      t.string :avatar
      t.string :password_digest
      t.string :email
      t.string :role, default: "user"

      t.timestamps
    end
  end
end

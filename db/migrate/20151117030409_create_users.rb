class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :username
      t.text   :bio
      t.string :image_url
      t.string :cover_image_url

      t.timestamps null: false
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
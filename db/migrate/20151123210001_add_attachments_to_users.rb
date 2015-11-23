class AddAttachmentsToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :image_url, :string
    remove_column :users, :cover_image_url, :string
    add_attachment :users, :avatar
    add_attachment :users, :cover
  end
end

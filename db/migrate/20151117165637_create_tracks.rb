class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.string :audio_url, null: false
      t.string :image_url
      t.string :description
      t.integer :plays
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :tracks, :user_id
    add_index :tracks, :audio_url, unique: true
  end
end

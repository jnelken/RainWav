class AddAttachmentsToTracks < ActiveRecord::Migration
  def change
    remove_column :tracks, :image, :string
    remove_column :tracks, :audio_url, :string
    add_attachment :tracks, :image
    add_attachment :tracks, :audio, null: false
  end
end

class Track < ActiveRecord::Base

  validates :title, :user_id, :genre_id, :audio_url, presence: true

  belongs_to :user
  belongs_to :genre
end

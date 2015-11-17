class Track < ActiveRecord::Base

  validates :title, :genre, :audio_url, presence: true

  belongs_to :user 
end

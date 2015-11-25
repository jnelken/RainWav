class Track < ActiveRecord::Base

  validates :title, :user_id, :genre_id, :audio, presence: true
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  #  fix default image path
  has_attached_file :image, default: 'public/favicon.ico', styles: { large: "500x500>", medium: "200x200>", thumb: "120x120>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

# is this ok?
  belongs_to :user
  belongs_to :genre
end

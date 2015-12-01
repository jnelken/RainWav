class Track < ActiveRecord::Base

  before_save :default_values
  def default_values
    self.plays ||= 0
  end

  validates :title, :user_id, :genre_id, :audio, presence: true
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/
  #  fix default image path :default_url => ActionController::Base.helpers.asset_path('missing_:style.png')
  has_attached_file :image, :default_url => ActionController::Base.helpers.asset_path('images/original/missing.png'), styles: { large: "500x500>", medium: "200x200>", thumb: "120x120>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :user,
  class_name: "User",
  primary_key: :id,
  foreign_key: :user_id

  belongs_to :genre
  has_many :reposts

end

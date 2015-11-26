class Repost < ActiveRecord::Base

  validates :user_id, :track_id, presence: true

belongs_to :track
belongs_to :user

attr_accessor :status

end

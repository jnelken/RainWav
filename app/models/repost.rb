class Repost < ActiveRecord::Base

  validates :user_id, :track_id, presence: true

belongs_to :track
belongs_to :user

end

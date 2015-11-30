class Repost < ActiveRecord::Base

  validates :user_id, :track_id, presence: true
  validates_uniqueness_of :track_id, scope: :user_id

belongs_to :track
belongs_to :user

end

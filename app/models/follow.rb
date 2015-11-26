class Follow < ActiveRecord::Base

  validates :follower_id, :following_id, presence: true

  belongs_to :follower,
  class_name: "User",
  primary_key: :id,
  foreign_key: :follower_id;

  belongs_to :followee,
  class_name: "User",
  primary_key: :id,
  foreign_key: :following_id;

  attr_accessor :status
end

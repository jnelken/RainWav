class User < ActiveRecord::Base
  validates :email, :session_token, :password_digest, presence: true, uniqueness: true

  #raise minimums for production
  validates :password, length: { minimum: 4, allow_nil: true }
  validates :email, length: { minimum: 4 }
  has_attached_file :avatar, styles: { large: "500x500>", medium: "200x200>", thumb: "120x120>" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  has_attached_file :cover, styles: { large: "1250x260>" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :tracks, dependent: :destroy

  has_many :followers,
  class_name: "User",
  foreign_key: :follower_id

  has_many :followees,
  class_name: "User",
  foreign_key: :following_id

  has_many :reposts

  def plays
    sum = 0
    self.tracks.each do |track|
      sum += track.plays.to_i
    end
    sum
  end

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user && @user.valid_password?(password)
    @user
  end

  def username=(val)
    write_attribute(:username, val.downcase)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

end

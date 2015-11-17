class User < ActiveRecord::Base
  # validates :username, :email, :password_digest :session_token, presence: true
  validates :email, :session_token, :password_digest, presence: true, uniqueness: true

  #raise minimums for production
  validates :password, length: { minimum: 4, allow_nil: true }
  validates :email, length: { minimum: 4 }
  # validates :email, regex @

  has_many :tracks

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user && @user.valid_password?(password)
    @user
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

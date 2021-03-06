class User < ApplicationRecord

  validates :email, :password_digest, :session_token, :city, :country, :hosting, :firstname, :lastname, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token

  has_attached_file :image, default_url: "batman.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  attr_reader :password

  has_many :trips,
           class_name: "Trip",
           foreign_key: :user_id,
           primary_key: :id

  has_many :reservations,
           class_name: "Trip",
           foreign_key: :host_id,
           primary_key: :id

  has_many :host,
           through: :trips,
           source: :host

  has_many :guest,
           through: :reservations,
           source: :traveler

  has_many :left_references,
           class_name: "Trip",
           foreign_key: :user_id,
           primary_key: :id

  has_many :references,
           class_name: "Reference",
           foreign_key: :host_id,
           primary_key: :id


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_location(city)
    User.all.where(city: city)
  end

  def self.find_by_email(email)
    User.find_by(email: email)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.password_is?(password)
    user
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

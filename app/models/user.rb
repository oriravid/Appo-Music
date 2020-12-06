# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 
    attr_reader :password
    after_initialize :ensure_session_token

    #validations
    validates :username, presence: true, uniqueness: true 
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, too_short: "must be at least 6 characters" }, allow_nil: true
    validates :password_digest, presence: true

    # associations
    has_many :playlists,
        foreign_key: :user_id,
        class_name: :Playlist

    has_many :saves,
        foreign_key: :user_id,
        class_name: :UserSave

    has_many :saved_tracks,
        through: :saves,
        source: :track

    has_many :saved_track_albums,
        through: :saved_tracks,
        source: :album

    # @user.saved_track_albums.distinct
    
    #User Auth Methods (SPIRE)
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end    
end

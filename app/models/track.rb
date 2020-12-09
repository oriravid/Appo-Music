# == Schema Information
#
# Table name: tracks
#
#  id           :bigint           not null, primary key
#  album_id     :integer          not null
#  title        :string           not null
#  track_number :integer          not null
#  play_count   :integer          default(0), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  url          :string           not null
#  duration     :string           not null
#
class Track < ApplicationRecord
    validates :album_id, :title, :track_number, :play_count, :duration, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist

    has_many :user_saves,
        foreign_key: :track_id,
        class_name: :UserSave

    has_many :users_saved,
        through: :user_saves,
        source: :user

    has_many :playlist_tracks,
        foreign_key: :track_id,
        class_name: :PlaylistTrack

    has_many :playlists,
        through: :playlist_tracks,
        source: :playlist
end

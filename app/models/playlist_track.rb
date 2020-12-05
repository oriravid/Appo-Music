# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :bigint           not null, primary key
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class PlaylistTrack < ApplicationRecord
    validates :playlist_id, :track_id, presence: true

    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist

    belongs_to :track,
        foreign_key: :track_id,
        class_name: :Track
end

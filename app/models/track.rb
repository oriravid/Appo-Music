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
#
class Track < ApplicationRecord
    validates :album_id, :title, :track_number, :play_count, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist
end

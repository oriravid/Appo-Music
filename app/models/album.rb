# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  artist_id    :integer          not null
#  title        :string           not null
#  genre        :string           not null
#  release_date :date             not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  url          :string           not null
#
class Album < ApplicationRecord
    validates :artist_id, :title, :genre, :release_date, :description, presence: true
    validates :title, uniqueness: { scope: :artist_id }

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :tracks,
        foreign_key: :album_id,
        class_name: :Track

end

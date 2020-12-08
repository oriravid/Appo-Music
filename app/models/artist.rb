# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  bio        :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  url        :string           not null
#
class Artist < ApplicationRecord
    validates :name, presence: true, uniqueness: true 
    validates :bio, presence: true

    has_many :albums,
        foreign_key: :artist_id,
        class_name: :Album

    has_many :tracks,
        through: :albums,
        source: :tracks
end

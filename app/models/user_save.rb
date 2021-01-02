# == Schema Information
#
# Table name: user_saves
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserSave < ApplicationRecord
    validates :user_id, :track_id, presence: true
    validates :track_id, uniqueness: { scope: :user_id }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :track,
        foreign_key: :track_id,
        class_name: :Track

    has_one :album,
        through: :track,
        source: :album
end

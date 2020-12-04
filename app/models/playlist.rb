# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord
    # validations
    validates :user_id, :title, presence: true

    # assosciations
    belongs_to :user
end

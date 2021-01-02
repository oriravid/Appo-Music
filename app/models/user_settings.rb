# == Schema Information
#
# Table name: user_settings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  loop       :boolean          default(FALSE), not null
#  shuffle    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserSettings < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end

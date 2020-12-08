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
#
require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

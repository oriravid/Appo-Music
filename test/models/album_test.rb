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
#
require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

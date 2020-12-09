class AddDurationToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :duration, :string, null: false
  end
end

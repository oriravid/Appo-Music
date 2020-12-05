class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.integer :track_number, null: false
      t.integer :play_count, null: false, default: 0

      t.timestamps
    end
    add_index :tracks, :album_id
    add_index :tracks, :title
  end
end

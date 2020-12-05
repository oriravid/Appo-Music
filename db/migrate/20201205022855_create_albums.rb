class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :genre, null: false
      t.date :release_date, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :albums, [:artist_id, :title], unique: true
  end
end

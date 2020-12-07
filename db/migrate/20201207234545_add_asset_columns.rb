class AddAssetColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :url, :string, null: false
    add_column :albums, :url, :string, null: false
    add_column :tracks, :url, :string, null: false
  end
end

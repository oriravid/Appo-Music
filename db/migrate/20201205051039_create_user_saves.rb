class CreateUserSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :user_saves do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.timestamps
    end
    add_index :user_saves, [:user_id, :track_id], unique: true
  end
end

class CreateUserSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :user_settings do |t|
      t.integer :user_id, null: false
      t.boolean :loop, null: false, default: false
      t.boolean :shuffle, null: false, default: false
      t.timestamps
    end
  end
end

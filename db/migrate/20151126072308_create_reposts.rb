class CreateReposts < ActiveRecord::Migration
  def change
    create_table :reposts do |t|
      t.integer :track_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :reposts, :track_id
    add_index :reposts, :user_id
  end
end

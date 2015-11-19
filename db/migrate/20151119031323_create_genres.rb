class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :genre, null: false
      t.timestamps null: false
    end
    add_index :genres, :genre, unique: true;
  end
end

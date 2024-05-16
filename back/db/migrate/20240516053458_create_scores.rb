class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.references :user, null: false, foreign_key: true
      t.references :mode, null: false, foreign_key: true
      t.references :difficulty, null: false, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end

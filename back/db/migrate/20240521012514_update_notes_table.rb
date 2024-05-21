class UpdateNotesTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :notes, :name, :ja_note_name
    add_column :notes, :en_note_name, :string
  end
end

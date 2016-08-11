class CreateBrews < ActiveRecord::Migration[5.0]
  def change
    create_table :brews do |t|
      t.string :name
      t.string :website
      t.string :img
    end
  end
end

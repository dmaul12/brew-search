class AddColumnsToBrews < ActiveRecord::Migration[5.0]
  def change
    add_reference :brews, :users, foreign_key: true
  end
end

class CreateBrews < ActiveRecord::Migration[5.0]
  def change
    create_table :brews do |t|
      t.string :brew_id
      t.string :name
      t.string :website

    end
  end
end

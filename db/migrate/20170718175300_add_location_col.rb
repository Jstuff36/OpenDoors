class AddLocationCol < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :location, :string, array: true, null: false
  end
end

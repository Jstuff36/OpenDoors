class AddDefaultValue < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :location, :string, null: false, array: true, default: []
  end
end

class AddInterstCol < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :interest, :text
  end
end

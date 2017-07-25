class AddUniqeIndexToTrips < ActiveRecord::Migration[5.1]
  def change
    add_index :trips, [:user_id, :host_id], unique: true
  end
end

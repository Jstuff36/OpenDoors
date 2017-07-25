class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.integer :user_id, null: false
      t.integer :host_id, null: false
      t.string :dates, array: true, null: false, defaults: []
      t.string :status, null: false
      t.text :message, null: false
      t.timestamps
    end
    add_index :trips, :user_id
    add_index :trips, :host_id
  end
end

class CreateReferences < ActiveRecord::Migration[5.1]
  def change
    create_table :references do |t|
      t.string :comment, null: false
      t.string :user_id, null: false
      t.string :host_id, null: false
      t.timestamps
    end
    add_index :references, :user_id
    add_index :references, :host_id
  end
end

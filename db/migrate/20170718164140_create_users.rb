class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :email, null: false, uniqueness: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, uniqueness: true
      t.string :languages, array: true, default: []
      t.string :city, null: false
      t.string :country, null: false
      t.string :occupation
      t.text :about
      t.boolean :hosting, default: true
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true

  end
end

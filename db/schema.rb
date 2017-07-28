# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170728225730) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "references", force: :cascade do |t|
    t.string "comment", null: false
    t.string "user_id", null: false
    t.string "host_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_references_on_host_id"
    t.index ["user_id"], name: "index_references_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "host_id", null: false
    t.string "dates", null: false, array: true
    t.string "status", null: false
    t.text "message", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_trips_on_host_id"
    t.index ["user_id", "host_id"], name: "index_trips_on_user_id_and_host_id", unique: true
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "languages", default: [], array: true
    t.string "city", null: false
    t.string "country", null: false
    t.string "occupation"
    t.text "about"
    t.boolean "hosting", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location", default: [], null: false, array: true
    t.string "picture", default: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501282474/batman-for-facebook_va9pxm.jpg"
    t.string "address"
    t.integer "zipcode"
    t.string "sex"
    t.integer "age"
    t.text "interest"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

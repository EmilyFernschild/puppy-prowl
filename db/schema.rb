# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_22_155112) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "walker_id", null: false
    t.integer "number_of_dogs"
    t.boolean "group_walks"
    t.datetime "appointment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["walker_id"], name: "index_appointments_on_walker_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "client_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "address"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.string "dog_image"
    t.string "dog_name"
    t.string "gender"
    t.string "age"
    t.string "size"
    t.bigint "client_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_dogs_on_client_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "walker_id", null: false
    t.datetime "date"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_reviews_on_client_id"
    t.index ["walker_id"], name: "index_reviews_on_walker_id"
  end

  create_table "walkers", force: :cascade do |t|
    t.string "walker_name"
    t.string "walker_email"
    t.string "location"
    t.integer "rates"
    t.string "services"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "appointments", "clients"
  add_foreign_key "appointments", "walkers"
  add_foreign_key "dogs", "clients"
  add_foreign_key "reviews", "clients"
  add_foreign_key "reviews", "walkers"
end

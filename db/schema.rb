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

ActiveRecord::Schema[7.0].define(version: 2023_02_16_073237) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "add_recordto_states", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "audits", force: :cascade do |t|
    t.integer "auditable_id"
    t.string "auditable_type"
    t.integer "associated_id"
    t.string "associated_type"
    t.integer "user_id"
    t.string "user_type"
    t.string "username"
    t.string "action"
    t.text "audited_changes"
    t.integer "version", default: 0
    t.string "comment"
    t.string "remote_address"
    t.string "request_uuid"
    t.datetime "created_at"
    t.index ["associated_type", "associated_id"], name: "associated_index"
    t.index ["auditable_type", "auditable_id", "version"], name: "auditable_index"
    t.index ["created_at"], name: "index_audits_on_created_at"
    t.index ["request_uuid"], name: "index_audits_on_request_uuid"
    t.index ["user_id", "user_type"], name: "user_index"
  end

  create_table "chatrooms", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "record_id", null: false
    t.string "comment_content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_id"], name: "index_comments_on_record_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "genre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "purchases", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.float "total"
    t.string "status", default: "Your purchase is pending..."
    t.string "identifier"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_purchases_on_user_id"
  end

  create_table "records", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "album_name"
    t.string "artist_name"
    t.string "album_cover"
    t.string "condition"
    t.string "genre"
    t.string "release_date"
    t.string "release_description"
    t.string "record_labels"
    t.string "spotify_link"
    t.integer "price"
    t.boolean "in_stock", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "aasm_state"
    t.index ["user_id"], name: "index_records_on_user_id"
  end

  create_table "shopping_carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_id"], name: "index_shopping_carts_on_record_id"
    t.index ["user_id"], name: "index_shopping_carts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "nickname"
    t.string "bio"
    t.string "country"
    t.string "instagram_handle"
    t.string "twitter_handle"
    t.string "paypal_handle"
    t.string "avatar", default: "https://i.pinimg.com/474x/00/f0/a3/00f0a32118159c93483154be511769ed.jpg"
    t.string "password_digest"
    t.string "email"
    t.string "role", default: "user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "watches", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "record_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_id"], name: "index_watches_on_record_id"
    t.index ["user_id"], name: "index_watches_on_user_id"
  end

  add_foreign_key "comments", "records"
  add_foreign_key "comments", "users"
  add_foreign_key "purchases", "users"
  add_foreign_key "records", "users"
  add_foreign_key "shopping_carts", "records"
  add_foreign_key "shopping_carts", "users"
end

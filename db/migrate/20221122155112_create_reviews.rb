class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :walker, null: false, foreign_key: true
      t.datetime :date
      t.text :comment

      t.timestamps
    end
  end
end

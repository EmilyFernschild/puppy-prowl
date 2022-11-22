class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :dog_image
      t.string :dog_name
      t.string :gender
      t.string :age
      t.string :size
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :walker, null: false, foreign_key: true
      t.integer :number_of_dogs
      t.boolean :group_walks
      t.datetime :appointment

      t.timestamps
    end
  end
end

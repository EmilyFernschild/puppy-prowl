class CreateWalkers < ActiveRecord::Migration[7.0]
  def change
    create_table :walkers do |t|
      t.string :walker_name
      t.string :walker_email
      t.string :location
      t.integer :rates
      t.string :services

      t.timestamps
    end
  end
end

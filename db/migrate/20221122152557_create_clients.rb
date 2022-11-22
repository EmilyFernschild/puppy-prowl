class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :client_name
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :address
      t.string :phone_number

      t.timestamps
    end
  end
end

class Client < ApplicationRecord
    has_many :dogs
    has_many :reviews
    has_many :appointments
    has_many :walkers, through: :appointments

    validates_presence_of :client_name, :email, :address, :phone_number, :username
    validates_uniqueness_of :username, :email
    validates :username, length: { in: 0..15 }
    validates :password, length: { in: 0..15 }, presence: true, allow_nil: true

    has_secure_password

end

class Client < ApplicationRecord
    has_many :dogs
    has_many :reviews
    has_many :appointments
    has_many :walkers, through: :appointments

    # validates_presence_of :client_name, :email, :address, :phone_number
    validates :username, length: { in: 0..15 }, uniqueness: true, presence: true
    has_secure_password
end

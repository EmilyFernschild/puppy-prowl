class ClientSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :username, :password_digest, :email, :address, :phone_number
  has_many :dogs
  has_many :appointments
  has_many :walkers
  has_many :reviews
end

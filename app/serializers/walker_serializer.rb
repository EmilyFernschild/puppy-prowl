class WalkerSerializer < ActiveModel::Serializer
  attributes :id, :walker_name, :walker_email, :location, :rates, :services
  has_many :reviews
  has_many :appointments
end

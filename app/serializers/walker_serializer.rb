class WalkerSerializer < ActiveModel::Serializer
  attributes :id, :walker_name, :walker_email, :location, :rates, :services
end

class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :number_of_dogs, :group_walks, :appointment, :walker_id
  has_one :client
  has_one :walker
end

class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :number_of_dogs, :group_walks, :appointment
  has_one :client
  has_one :walker
end

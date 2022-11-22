class DogSerializer < ActiveModel::Serializer
  attributes :id, :dog_image, :dog_name, :gender, :age, :size
  has_one :client
end

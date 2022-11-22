class Dog < ApplicationRecord
  belongs_to :client

  validates_presence_of :dog_image, :dog_name, :gender, :size, :age
end

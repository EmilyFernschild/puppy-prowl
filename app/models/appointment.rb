class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :walker

  validates_presence_of :number_of_dogs
  validates :appointment, uniqueness: true, presence: true
end

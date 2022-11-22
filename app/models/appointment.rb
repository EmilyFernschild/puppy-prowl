class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :walker
  
  validates_presence_of :group_walks, :number_of_dogs
  validates :appointment, uniqueness: true, presence: true
end

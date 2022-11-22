class Walker < ApplicationRecord
has_many :appointments
has_many :clients, through: :appointments
has_many :reviews

validates_presence_of :walker_name, :walker_email, :location, :rates, :services 
end

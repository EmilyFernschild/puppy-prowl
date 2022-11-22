class Review < ApplicationRecord
  belongs_to :client
  belongs_to :walker

  validates :comment, presence: true
end

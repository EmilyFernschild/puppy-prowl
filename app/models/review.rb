class Review < ApplicationRecord
  belongs_to :client
  belongs_to :walker

  validates :comment, presence: true, length: {minimum: 2}
end

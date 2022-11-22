class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date, :comment
  has_one :client
  has_one :walker
end

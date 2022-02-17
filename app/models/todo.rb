class Todo < ApplicationRecord
  has_many :tasks
  accepts_nested_attributes_for :tasks, reject_if: ->(attributes){ attributes['description'].blank? }, allow_destroy: true
end

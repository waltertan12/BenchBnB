class Review < ActiveRecord::Base
  validates :bench_id, :rating, :body, presence: true
  validates :rating, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  } 
  belongs_to :user
  belongs_to :bench
end

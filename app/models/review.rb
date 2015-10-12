class Review < ActiveRecord::Base
  validates :bench_id, :rating, :body, presence: true
  belongs_to :user
  belongs_to :bench
end

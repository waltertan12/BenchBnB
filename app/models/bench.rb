class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true

  has_many :reviews

  def self.in_bounds(filter) 
    upperBound = filter["bounds"]["northEast"]["lat"]
    rightBound = filter["bounds"]["northEast"]["lng"]
    lowerBound = filter["bounds"]["southWest"]["lat"]
    leftBound  = filter["bounds"]["southWest"]["lng"]
    
    min = filter["min"] || 0
    max = filter["max"] || 9999

    Bench.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        "benches"
      WHERE
        lat BETWEEN #{lowerBound} AND #{upperBound}
      AND
        lng BETWEEN #{leftBound} AND #{rightBound}
      AND
        seating BETWEEN #{min} AND #{max}
    SQL
  end

  def average_rating
    if reviews.empty?
      "Not yet reviewed"
    else
      total = reviews.inject(0) { |accum, elem| accum += elem.rating }
      (0.0 + total) / (0.0 + reviews.length)
    end
  end
end

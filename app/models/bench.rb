class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true
  def self.in_bounds(bounds, filter) 
    upperBound = bounds["northEast"]["lat"]
    rightBound = bounds["northEast"]["lng"]
    lowerBound = bounds["southWest"]["lat"]
    leftBound  = bounds["southWest"]["lng"]
    min = filter["min"]
    max = filter["max"]

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
end

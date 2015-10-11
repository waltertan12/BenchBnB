class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true
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
end

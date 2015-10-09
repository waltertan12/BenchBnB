class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true
  def self.in_bounds(bounds) 
    upperBound = bounds["northEast"]["lat"]
    rightBound = bounds["northEast"]["lng"]
    lowerBound = bounds["southWest"]["lat"]
    leftBound  = bounds["southWest"]["lng"]
    
    Bench.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        "benches"
      WHERE
        lat BETWEEN #{lowerBound} AND #{upperBound}
      AND
        lng BETWEEN #{leftBound} AND #{rightBound}
    SQL
  end
end

json.array! @benches do |bench|
  json.extract!(bench, :id, 
                       :description, 
                       :lat, 
                       :lng,
                       :seating,
                       :image_url,
                       :created_at, 
                       :updated_at)
  json.average_rating bench.average_rating
  json.reviews bench.reviews
end
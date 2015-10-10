json.array! @benches do |bench|
  json.extract!(bench, :id, 
                       :description, 
                       :lat, 
                       :lng,
                       :seating,
                       :created_at, 
                       :updated_at)
end
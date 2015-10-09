json.array! @benches do |bench|
  json.extract!(bench, :id, 
                       :description, 
                       :lat, 
                       :lng, 
                       :created_at, 
                       :updated_at)
end
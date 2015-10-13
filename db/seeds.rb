# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

b1 = Bench.create!(description: "AT&T Park", 
                   lat: 37.77807570952049, 
                   lng: -122.38902568817139, 
                   seating: 5)
b2 = Bench.create!(description: "Lands End", 
                   lat: 37.788052, 
                   lng: -122.505735, 
                   seating: 2)
b3 = Bench.create!(description: "Baker Beach", 
                   lat: 37.79303284401639, 
                   lng: -122.48369693756104, 
                   seating: 3)

b4 = Bench.create!(description: "Dolores Park", 
                   lat: 37.759232732216, 
                   lng: -122.427257895, 
                   seating: 2)

b5 = Bench.create!(description: "Pug Sunday!", 
                   lat: 37.79093020979957, 
                   lng: -122.42897987372271, 
                   seating: 4)
b6 = Bench.create!(description: "Tassel Park", 
                   lat: 42.910444,
                   lng: -85.498644, 
                   seating: 3)
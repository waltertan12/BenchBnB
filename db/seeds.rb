# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

b1 = Bench.create!(description: "AT&T Park", lat: 37.77, lng: -122.38)
b2 = Bench.create!(description: "Lands End", lat: 37.78, lng: -122.50)
b3 = Bench.create!(description: "Baker Beach", lat: 37.79, lng: -122.480)
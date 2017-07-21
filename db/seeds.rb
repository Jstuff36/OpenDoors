# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user: {email: "myemail", password: "password", firstname: "justin", lastname: "white", city: "Cucuta", country: "Colombia", location: [8, 72.5]}
User.delete_all

user1 = User.new(
  firstname: "Justin",
  lastname: "White",
  email: "email",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  location: [37.775769, -122.434960]
)
user1.save

user2 = User.new(
  firstname: "Kovthe",
  lastname: "Rue",
  email: "email1",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  location: [37.779760, -122.413820]
)
user2.save

user3 = User.new(
  firstname: "Pippie",
  lastname: "Longstockings",
  email: "email2",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  location: [ 37.769996, -122.511281]
)
user3.save

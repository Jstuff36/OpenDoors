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
  about: "Likes to eat",
  location: [37.775769, -122.434960],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/q_100/v1500658457/16587048_10209812149394672_8162820951177611547_o_woib7p.jpg"
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
  about: "Meddles with dark forces better left alone",
  location: [37.779760, -122.413820],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/q_100/v1500658517/kvothe_m9mbfl.jpg"
)
user2.save

user3 = User.new(
  firstname: "Julius",
  lastname: "Ceaser",
  email: "email2",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Doesn't listen to advice",
  location: [ 37.769996, -122.511281],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/q_100/v1500658629/Caesar_zxwnnx.jpg"
)
user3.save

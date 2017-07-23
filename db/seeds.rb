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
  languages: ["English", "Spanish"],
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
  languages: ["Aturan", "Ademic"],
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
  location: [ 37.779996, -122.511281],
  languages: ["latin"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/q_100/v1500658629/Caesar_zxwnnx.jpg"
)
user3.save

user4 = User.new(
  firstname: "Hoires",
  lastname: "Zoo",
  email: "email3",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Likes chinese food and can will drain a pull up 3 on you",
  location: [ 37.869950, -122.471300],
  languages: ["Manderin"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500763596/hoires_wc828g.jpg"
)
user4.save

user5 = User.new(
  firstname: "Christopher",
  lastname: "Wallace",
  email: "email4",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Damn right I like the life I live, cause I went from negative to positive",
  location: [ 37.759990, -122.31127],
  languages: ["Ebonics"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500764375/biggie_epf4lh.jpg"
)
user5.save

user6 = User.new(
  firstname: "Aubrey",
  lastname: "Graham",
  email: "email5",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "You know life is what we make it, and a chance is like a picture, it’d be nice if you just take it",
  location: [ 37.769800, -122.381270],
  languages: ["Canadian English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500764916/drake_x1nkau.jpg"
)
user6.save

user7 = User.new(
  firstname: "Stephen",
  lastname: "Loquet",
  email: "email6",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Thinks So Cal is life",
  location: [ 37.669923, -122.411296],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500764855/stephen_cxoztx.jpg"
)
user7.save

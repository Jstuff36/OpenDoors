# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user: {email: "myemail", password: "password", firstname: "justin", lastname: "white", city: "Cucuta", country: "Colombia", location: [8, 72.5]}
User.delete_all
Trip.delete_all
Reference.delete_all

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
  lastname: "Zho",
  email: "email3",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Likes chinese food and will drain a pull up 3 on you",
  location: [37.792366, -122.445890],
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
  location: [37.794069, -122.401846],
  languages: ["English"],
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
  location: [37.804514, -122.418474],
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
  location: [37.796119, -122.411568],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500764855/stephen_cxoztx.jpg"
)
user7.save

user8 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
  interest: "I like moives! My favorite moive quote is " + Faker::Movie.quote,
  location: [37.793143, -122.416378],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501274629/3596043_kyltrv.jpg"
)
user8.save

user9 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
  interest: "I like moives! My favorite moive quote is " + Faker::Movie.quote,
  location: [37.783265, -122.417927],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501274743/3729100_xmo2l5.jpg"
)
user9.save

user10 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
  interest: "I like moives! My favorite moive quote is " + Faker::Movie.quote,
  location: [37.775688, -122.398196],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275068/not-so-recent-and-random-portraits_qsqv4t.jpg"
)
user10.save

user11 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
  interest: "I like moives! My favorite moive quote is " + Faker::Movie.quote,
  location: [37.795988, -122.397249],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275177/not-so-recent-and-random-portraits_0_lbhjfj.jpg"
)
user11.save

user12 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
  interest: "I like moives! My favorite moive quote is " + Faker::Movie.quote,
  location: [37.795988, -122.397249],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275404/not-so-recent-and-random-portraits_5_li9cxc.jpg"
)
user12.save

user12 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
  interest: "I like moives! My favorite moive quote is " + Faker::Movie.quote,
  location: [37.803618, -122.439757],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275448/not-so-recent-and-random-portraits_8_i0jpua.jpg"
)
user12.save

user999 = User.new(
  firstname: "Rick",
  lastname: "Blaine",
  email: "email7",
  password: "password",
  city: "Casablanca",
  country: "United States",
  hosting: true,
  about: "…Here’s looking at you, kid.",
  location: [ 33.5731, -7.5898],
  languages: ["English"],
  picture: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500830483/rick_jkp74k.jpg"
)
user999.save

trip1 = Trip.new(
  user_id: user1.id,
  host_id: user2.id,
  dates: ["09/14/2017", "09/17/2017"],
  status: "Pending",
  message: "Hi, you're place looks wonderful would you mind hosting us?"
)

trip1.save!

trip2 = Trip.new(
  user_id: user1.id,
  host_id: user3.id,
  dates: ["08/14/2017", "08/17/2017"],
  status: "Pending",
  message: "Hi, would you mind sending us a few more photos"
)

trip2.save

trip3 = Trip.new(
  user_id: user4.id,
  host_id: user1.id,
  dates: ["09/4/2017", "09/17/2017"],
  status: "Pending",
  message: "Hi, is there a bus close by to the city?"
)

trip3.save

trip4 = Trip.new(
  user_id: user2.id,
  host_id: user1.id,
  dates: ["09/10/2017", "09/12/2017"],
  status: "Pending",
  message: "Coming to stay with you this time!"
)

trip4.save

reference1 = Reference.new(
  user_id: user1.id,
  host_id: user2.id,
  comment: "Fantastic host. Definitely would stay again!"
)

reference1.save!

reference2 = Reference.new(
  user_id: user2.id,
  host_id: user1.id,
  comment: "Great host! They even cooked for us"
)

reference2.save!

reference3 = Reference.new(
  user_id: user3.id,
  host_id: user1.id,
  comment: "Best host we've stayed at. Definitely would stay again!. ! They even cooked for us"
)

reference3.save!

reference4 = Reference.new(
  user_id: user4.id,
  host_id: user1.id,
  comment: "Host knows how to have a good time! We even went out to the bars together"
)

reference4.save!

reference5 = Reference.new(
  user_id: user3.id,
  host_id: user2.id,
  comment: "Average stay. The house was not the cleanist or most organized"
)

reference5.save!

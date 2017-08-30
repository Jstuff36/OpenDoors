# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
User.delete_all
Trip.delete_all
Reference.delete_all

user1 = User.new(
  firstname: "Keith",
  lastname: "Lindsey",
  address: "1210 Lane St",
  zipcode: "94124",
  age: 311,
  sex: "Male",
  email: "email",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Hi! I'm Keith. I'm passionate about reading, science, and traveling. Come visit, my door is always open!",
  languages: ["English", "French"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1503427623/people-516372_960_720_suwml5.jpg"
)
user1.save

user2 = User.new(
  firstname: "Jan",
  lastname: "Rue",
  email: "email1",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Hello I'm Jan I enjoy conversation about the intersection of various cultures!",
  location: [37.779760, -122.413820],
  languages: ["English", "Japanese"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1503427713/girl-657753_960_720_fm3lhz.jpg"
)
user2.save

user3 = User.new(
  firstname: "Tony",
  lastname: "White",
  email: "email2",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "I'm not home often but feel free to shoot me a message and ask!",
  location: [ 37.779996, -122.511281],
  languages: ["latin"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1503427789/skydiving-678168__340_xxf6e8.jpg"
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
  about: "Likes Mexican food and will drain a pull up 3 on you",
  location: [37.792366, -122.445890],
  languages: ["English, Manderin"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500763596/hoires_wc828g.jpg"
)
user4.save

user5 = User.new(
  firstname: "Lindsey",
  lastname: "Greene",
  email: "email4",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Hi, I'm Lindsey! I'm from Russia and work in tech.",
  location: [37.794069, -122.401846],
  languages: ["English, Russian"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1503427898/color-20412__340_vekwjt.jpg"
)
user5.save

user6 = User.new(
  firstname: "David",
  lastname: "Norris",
  email: "email5",
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "You know life is what we make it, and a chance is like a image, it’d be nice if you just take it",
  location: [37.804514, -122.418474],
  languages: ["Canadian English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1503428005/passion-1690965__340_qoviid.jpg"
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
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500764855/stephen_cxoztx.jpg"
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
  interest: "My favorite quote is " + Faker::MostInterestingManInTheWorld.quote + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.793143, -122.416378],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501274629/3596043_kyltrv.jpg"
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
  about: "I'm orginially from " + Faker::Team.state + " and I still have a lot of state pride",
  interest: "My favorite quote is " + Faker::MostInterestingManInTheWorld.quote + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.783265, -122.417927],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501274743/3729100_xmo2l5.jpg"
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
  about: "I'm an instructor at " + Faker::Educator.university,
  interest: "My favorite quote is " + Faker::MostInterestingManInTheWorld.quote + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.775688, -122.398196],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275068/not-so-recent-and-random-portraits_qsqv4t.jpg"
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
  about: "I'm orginially from " + Faker::Team.state + " and I still have a lot of state pride",
  interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.795988, -122.397249],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275177/not-so-recent-and-random-portraits_0_lbhjfj.jpg"
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
  about: "I'm an instructor at " + Faker::Educator.university,
  interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.795988, -122.397249],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275404/not-so-recent-and-random-portraits_5_li9cxc.jpg"
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
  about: "I'm an engineer at Facebook. I enjoy hacking together ideas that change the world",
  interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.803618, -122.439757],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501275448/not-so-recent-and-random-portraits_8_i0jpua.jpg"
)
user12.save

user13 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "I'm an instructor at " + Faker::Educator.university,
  interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.803618, -122.439757],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501392637/images_tlukyp.jpg"
)
user13.save

user14 = User.new(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  email: Faker::Internet.unique.email,
  password: "password",
  city: "San Francisco",
  country: "United States",
  hosting: true,
  about: "Hi! I'm not home often because work takes me across the globe but I have a dog and I'd love to have you if I'm around",
  interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
  location: [37.765792, -122.462902],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501440112/girl-with-grey-hair_vgmaqx.jpg"
)
user14.save

user15 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "San Francisco",
country: "United States",
hosting: true,
about: "I'm an instructor at " + Faker::Educator.university,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
location: [37.760827, -122.478903],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501440184/ee8f163549859.562e32e62418a_kbctvs.jpg"
)
user15.save

user16 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "San Francisco",
country: "United States",
hosting: true,
about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
location: [37.748116, -122.451748],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501440292/images_yjos86.jpg"
)
user16.save

user17 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "San Francisco",
country: "United States",
hosting: true,
about: "I'm an instructor at " + Faker::Educator.university,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish + ". In my spare time you can find me reading anything by" + Faker::Book.author,
location: [37.753328, -122.432006],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501440351/images_pkjmhb.jpg"
)
user17.save

user18 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "I'm orginially from " + Faker::Team.state + " and I still have a lot of pride",
interest: "My favorite quote is " + Faker::MostInterestingManInTheWorld.quote + ". In my spare time you can find me reading anything by" + Faker::Book.author,
location: [33.580083, -7.627963],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501440779/a7217d6009493e7e8347594ba699dc46_xnzuw1.jpg"
)
user18.save

user19 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
interest: "My favorite quote is " + Faker::MostInterestingManInTheWorld.quote + ". In my spare time you can find me reading anything by" + Faker::Book.author,
location: [33.580083, -7.627963],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441137/casablanca_drawing_man_ozmdn2.jpg"
)
user19.save

user20 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
interest: "My favorite quote is " + Faker::MostInterestingManInTheWorld.quote + ". In my spare time you can find me reading anything by" + Faker::Book.author,
location: [33.582422, -7.654304],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441186/images_rgbe5j.jpg"
)
user20.save

user21 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "Hi! I'm not home often because work takes me across the globe but I have a dog and I'd love to have you if I'm around",
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.591882, -7.641301],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441248/casablanca_man_2_tkuaru.jpg"
)
user21.save

user22 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.589137, -7.586324],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441364/images_o3wquq.jpg"
)
user22.save

user23 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "I'm an instructor at " + Faker::Educator.university,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.565595, -7.572084],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501440351/images_pkjmhb.jpg"
)
user23.save

user24 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "Star Wars quotes describe me best like " + Faker::StarWars.quote,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.588329, -7.578113],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441405/images_rwsauv.jpg"
)
user24.save

user25 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "I'm orginially from " + Faker::Team.state + " and I still have a lot of state pride",
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.549812, -7.597626],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441432/images_sycc9j.jpg"
)
user25.save

user26 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "I'm an instructor at " + Faker::Educator.university,
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.599786, -7.653829],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441510/casablanca_3_gjzggw.jpg"
)
user26.save

user27 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "I'm an engineer at Yelp. I enjoy hacking together ideas that change the world",
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.602050, -7.620300],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441554/images_skmidl.jpg"
)
user27.save

user28 = User.new(
firstname: Faker::Name.first_name,
lastname: Faker::Name.last_name,
email: Faker::Internet.unique.email,
password: "password",
city: "Casablanca",
country: "Morocco",
hosting: true,
about: "Hi! I'm not home often because work takes me across the globe but I have a dog and I'd love to have you if I'm around",
interest: "I enjoy cooking! I make a great" + Faker::Food.dish,
location: [33.593813, -7.591228],
languages: ["English"],
image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501441584/images_qb6krp.jpg"
)
user28.save

user29 = User.new(
  firstname: "Rick",
  lastname: "Blaine",
  email: "email7",
  password: "password",
  city: "Casablanca",
  country: "Morocco",
  hosting: true,
  about: "…Here’s looking at you, kid.",
  location: [ 33.5731, -7.5898],
  languages: ["English"],
  image: "https://res.cloudinary.com/dax5cdjeh/image/upload/v1500830483/rick_jkp74k.jpg"
)
user29.save

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

trip5 = Trip.new(
  user_id: user15.id,
  host_id: user3.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip5.save

trip6 = Trip.new(
  user_id: user20.id,
  host_id: user23.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip6.save

trip7 = Trip.new(
  user_id: user4.id,
  host_id: user7.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip7.save

trip8 = Trip.new(
  user_id: user15.id,
  host_id: user3.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip8.save

trip9 = Trip.new(
  user_id: user10.id,
  host_id: user8.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Hi, you're place looks wonderful would you mind hosting us?"
)

trip9.save!

trip10 = Trip.new(
  user_id: user2.id,
  host_id: user6.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Hi, would you mind sending us a few more photos"
)

trip10.save

trip11 = Trip.new(
  user_id: user19.id,
  host_id: user16.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Hi, is there a bus close by to the city?"
)

trip11.save

trip12 = Trip.new(
  user_id: user10.id,
  host_id: user2.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip12.save

trip13 = Trip.new(
  user_id: user18.id,
  host_id: user5.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip13.save

trip14 = Trip.new(
  user_id: user8.id,
  host_id: user9.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip14.save

trip15 = Trip.new(
  user_id: user15.id,
  host_id: user9.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip15.save

trip16 = Trip.new(
  user_id: user18.id,
  host_id: user22.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip16.save

trip17 = Trip.new(
  user_id: user13.id,
  host_id: user12.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Are you availabe between the above dates? Hoping to explore the city and meet locals!"
)

trip17.save

trip18 = Trip.new(
  user_id: user18.id,
  host_id: user27.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Hi, you're place looks wonderful would you mind hosting us?"
)

trip18.save!

trip19 = Trip.new(
  user_id: user12.id,
  host_id: user17.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Hi, would you mind sending us a few more photos"
)

trip19.save

trip20 = Trip.new(
  user_id: user25.id,
  host_id: user5.id,
  dates: [Faker::Date.between(Date.today, 1.month.from_now),
          Faker::Date.between(1.month.from_now, 2.month.from_now)],
  status: "Pending",
  message: "Hi, is there a bus close by to the city?"
)

trip20.save

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
  comment: "Average stay. The house was not the cleanest or most organized"
)

reference5.save!

reference6 = Reference.new(
  user_id: user20.id,
  host_id: user26.id,
  comment: "Fantastic host. Definitely would stay again!"
)

reference6.save!

reference7 = Reference.new(
  user_id: user4.id,
  host_id: user7.id,
  comment: "Great host! They even cooked for us"
)

reference7.save!

reference8 = Reference.new(
  user_id: user13.id,
  host_id: user2.id,
  comment: "The host had the most comfy bed I've slept on in years"
)

reference8.save!

reference9 = Reference.new(
  user_id: user7.id,
  host_id: user1.id,
  comment: "Host knows how to have a good time! We even went out to the bars together"
)

reference9.save!

reference10 = Reference.new(
  user_id: user19.id,
  host_id: user1.id,
  comment: "Average stay. The house was not the cleanest or most organized"
)

reference10.save!

reference11 = Reference.new(
  user_id: user11.id,
  host_id: user21.id,
  comment: "The host had only had a couch for us but the food made up for it!"
)

reference11.save!

reference12 = Reference.new(
  user_id: user5.id,
  host_id: user8.id,
  comment: "Great host! They even cooked for us"
)

reference12.save!

reference13 = Reference.new(
  user_id: user13.id,
  host_id: user25.id,
  comment: "The host had the most comfy bed I've slept on in years"
)

reference13.save!

reference14 = Reference.new(
  user_id: user8.id,
  host_id: user1.id,
  comment: "Host knows how to have a good time! We even went out to the bars together"
)

reference14.save!

reference15 = Reference.new(
  user_id: user22.id,
  host_id: user18.id,
  comment: "Average stay. The house was not the cleanest or most organized"
)

reference15.save!

reference16 = Reference.new(
  user_id: user23.id,
  host_id: user6.id,
  comment: "The host had only had a couch for us but the food made up for it!"
)

reference16.save!

reference17 = Reference.new(
  user_id: user14.id,
  host_id: user17.id,
  comment: "Great host! They even cooked for us"
)

reference17.save!

reference18 = Reference.new(
  user_id: user13.id,
  host_id: user21.id,
  comment: "The host had the most comfy bed I've slept on in years"
)

reference18.save!

reference19 = Reference.new(
  user_id: user7.id,
  host_id: user11.id,
  comment: "Host knows how to have a good time! We even went out to the bars together"
)

reference19.save!

reference20 = Reference.new(
  user_id: user19.id,
  host_id: user10.id,
  comment: "Average stay. The house was not the cleanest or most organized"
)

reference20.save!

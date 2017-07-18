``` Javascript
{
  session: {
    id :1
    firstname: Justin,
    lastname: White,
    email: "myemail",
    location: [129.344, 124.93],
    languages: [English, Arabic],
    City: "Cucuta",
    Country: "Colombia",
    age: 23,
    occupation: "developer",
    about: "Likes to travel",
    hosting: true,
    errors: []
  }
  users: {
    1: {
      id :1
      firstname: Justin,
      lastname: White,
      email: "myemail",
      location: [129.344, 124.93],
      languages: [English, Arabic],
      City: "Cucuta",
      Country: "Colombia",
      age: 23,
      occupation: "developer",
      about: "Likes to travel",
      hosting: true
    }
    errors: []
  }

  current_user: {
    id: 1
  }

  trips: {
    1: {
      id: 1,
      user_id: 2,
      dates: ['09/14/2017', '09/21/2017']
      status: "confirmed",
      host_id: 3
    }
  }

  references: {
    1: {
      id: 1,
      trip_id: 1,
      comments: "great"
    }
    errors: []
  }
}
```

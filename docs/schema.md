# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
firstname       | string    | not null
lastname        | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location       | string    | not null
languages       | string    |
city            | string    | not null
country         | string    | not null
age             | string    |
occupation      | string    |
about           | text      |
trips_id        | integer   | foreign key (references trips), indexed
guest_id        | integer   | foreign key (references users), indexed

## trips
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
date            | string    | not null
status          | string    | not null
host_id         | integer   | not null, foreign key (references users), indexed

## refrences
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
trips_id        | integer   | not null, foreign key (references trips), indexed
comments        | text      | not null

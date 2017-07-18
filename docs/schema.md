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
location        | array     | not null
languages       | array     |
city            | string    | not null
country         | string    | not null
age             | string    |
occupation      | string    |
about           | text      |
hosting         | boolean   | not null

## trips
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
dates           | array     | not null
status          | string    | not null
host_id         | integer   | not null, foreign key (references users), indexed

## references
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
trip_id         | integer   | not null, foreign key (references trips), indexed
comments        | text      | not null

### uniqueness in combination constraint on user_id and trip_id

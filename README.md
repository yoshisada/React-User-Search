# Lab 2: User search application
Due date: July 5th, 2021 at 11:59 EST

## Intro
Implemented as a part of IBM Acellerate 2021 using React and Material-UI.  Deoplyed here: [**yoshisada.github.io/React-ToDo-List/**](https://yoshisada.github.io/React-User-Search/)

## Setup
  Pull /users data from [JSON Placeholder](https://jsonplaceholder.typicode.com/):
+ To see what the output looks like, try running
  `curl https://jsonplaceholder.typicode.com/users`
  in your terminal.
+ Use **asynchronous** calls to pull the data. Try using [axios for a GET request](https://careerkarma.com/blog/axios-get/).
+ The data is in JSON format. Check out [How to work with JSON in Javascript](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript).


## Requirements
The User Search App should be able to:
+ Display user information (at least name, email, phone, and city)
+ Remove entries from list (do not try to delete from databse, data will refresh on pull)
+ Search for users by name
+ Search for users by city
+ Sort users by city
# A minimal twitter-like application

This project is the result of a web lab from a class at Télécom Paris as part of my Master's Degree in Computer Science.

## About the course: **IGR203 - Human-Computer Interaction**

- Software Development - C++
- User-Centered Design
- Web Interfaces - Js & Node.js _**This lab fits here**_
- Arduino

## About this lab

### Tech stack

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com) to manage requests and for routing
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars) (based on [Handlebars](https://handlebarsjs.com)) as a template engine

### Goal of the project

The goal was to create a minimal twitter-like app that lets you do the follwing:
| feature | route |
|--|--|
| view all posts (called micropubs) | `/micropubs` |
| view a specific micropub | `/micropub?id=$ID` (replace `$ID` by a number) |
| publish a micropub | `/micropub/new` |

Other requirements included:
- save the new micropubs on the server so that data is not lost when server is stopped and relaunched
- reordering the micropubs based on their date
- ability to see all the micropubs in a json file at the following route `/micropub`

## Installation

1. You should have [node](https://nodejs.org/en) installed to be able to use this app.
2. Clone this repository.
```sh
git clone https://github.com/0ranga/IGR203-web-server-lab.git
```
3. Navigate to the project directory.
```sh
cd IGR203-web-server-lab
```
4. Install the project's dependencies.
```sh
npm install
```

## Usage

1. Start the server.
```sh
node app.js
```
2. You should be able to open it at the following link:
```
http://localhost:8080/micropubs
```
## Preview of the app

![Home page](/docs/home.png "Home page")
![New micropub](/docs/new-micropub.png "New micropub")
![One micropub](/docs/one-micropub.png "One micropub")

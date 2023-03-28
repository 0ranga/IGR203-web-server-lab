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

The goal was to create a minimal twitter-like app that lets you do the follwing things:
- view all posts (called micropubs) 	-> route: `/micropubs`
- view a specific micropub 		-> route: `/micropub?id=$ID` (replace `$ID` by a number)
- publish a micropub 			-> route: `/micropub/new`

A few other requirements included:
- save the new micropubs on the server so that data is not lost when server is stopped and relaunched
- reordering the micropubs based on their date

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
5. Start the server.
	```sh
	node app.js
	```
6. You should be able to open it at the following link:
	```
	http://localhost:8080/micropubs
	```


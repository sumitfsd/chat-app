# Chat App

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

User can chat and check the weather using this App

## Features

- Create Room and Join Room
- Chat in group
- Check current weather

## Tech

Chat App uses a number of open source projects to work properly:

- Typescript + React
- Router
- node-sass

## Installation

React requires [Node.js](https://nodejs.org/) to run.

Clone the repo

```sh
cd chat-app-front-end
npm i
Create .env file on root folder in chat-app-frontend and insert below lines
REACT_APP_WEATHER_KEY = "b3cd323b89ab55b940e9ec2862a1568b"
REACT_APP_WEATHER_BASE_URL = "http://api.openweathermap.org"
npm start
```

```sh
cd chat-app-back-end
npm i
node server.js
```

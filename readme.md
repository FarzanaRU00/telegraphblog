## Table of Contents
[Introduction to Our Project](#Anonymous-Entries)  
[Installation](#Installation)  
[Usage](#Usage)  
[API](#API)
[Wins](#Wins)
[Challanges](#Challanges)
 
# Anonymous-Entries

We used the [Telegraph](https://telegra.ph/) as inspiration for our project. Our application allows users to anonymously share their opinions. write down their thoughts whilst remaining anonymous. The posts are stored in a Postgres database and can be accessed through an API.

### Installation

- Clone or download this repo
- `npm install`
- `npm init -y` to say yes to everything and skip the  questions
- `npm i -D` to install Dev dependencies

### Usage

- Open your terminal/CLI and navigate to the `telegraphblog` folder
- Ensure docker desktop app is running which can be confirmed by the blue whale in your menu bar
- Run `docker-compose up` to start the API and DB services
- Access: client on localhost:8080/ and server on localhost:3000/
- Run `docker-compose down` to stop the services and keep data

## Technologies

- HTML, CSS and JavaScript
  - Dependencies and technologies include: `express` , `cors` , `nodemon` , `node`, `Postgres`
  - Test suite: `Jest`

## API
| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /blogs/         	| GET       	| index  
| /blogs/:id        | GET       	| show   
| /blogs          	| POST      	| create  

# Bugs

- 

# Wins & Challenges

- [WIN] : Managed to fix our routes and the backend
- [WIN] : Understood the theory of using an event listener to link our front-end to the back/ our database - need to practise to see if this is successful
- [CHALLENGE] : Understanding how to set up our docker-compose.yaml file
- [CHALLENGE] : Did not have time to test
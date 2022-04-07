const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const blogsRoutes = require('./controllers/blogroutes')

server.use('/blogs', blogsRoutes)

const port = process.env.PORT || 3000;

// root route
server.get('/', (req, res) => res.send('This the root route'))

module.exports = server
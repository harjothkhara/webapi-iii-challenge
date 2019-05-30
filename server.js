const express = require('express');

const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter');
const server = express();

//built in global middleware - parses body
server.use(express.json());

//custom middleware
server.use(logger);

server.use('/api/users', userRouter);
server.use('/api/posts', postRouter)


server.get('/', (req, res) => {
  res.send({messageOfTheDay : process.env.MOTD})
});

//custom middleware
function logger(req, res, next) {
  const date = new Date();
  console.log(`(Logger) Request type: ${req.method}, 
  Request url: ${req.url}, Timestamp: ${date}`)
  next();
};

module.exports = server;

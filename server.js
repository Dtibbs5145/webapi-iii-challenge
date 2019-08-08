const express = require('express');
// I had to add require along with the ()
//I'm not sure if it was supposed to be missing that or not, but thought I would make note of it.

const server = express();

const usersRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use('/api/post', postRouter);
server.use('/api/users', usersRouter);

//custom middleware

function logger(req, res, next) {

};

module.exports = server;

const express = require('express');

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

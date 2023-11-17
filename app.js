const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const notfound = require('./app/middlewares/not-found');

const app = express();
const v1 = '/api/v1'

const errorHandlermiddleware = require('./app/middlewares/error-handler')
const notfoundMiddleware = require('./app/middlewares/not-found')

const todosRouter = require('./app/api/v1/todos/routers');
const userRouter = require('./app/api/v1/users/routers')
const notfound = require('./app/middlewares/not-found');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world"
  });
});
app.use(v1, todosRouter)
app.use(v1, userRouter)

app.use(errorHandlermiddleware)
app.use(notfoundMiddleware)

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//Mongoose Schema
require('./models/Users');
require('./models/Tasks');

//Import Routes
const tasksRoute = require('./routes/tasks');
const usersRoute = require('./routes/users');

//Create a local DB
mongoose.connect('mongodb://localhost:27017/taskApp', {useNewUrlParser: true})
  .then(()=> console.log('DB Connected Successfully'))
  .catch(err => console.log(err));


//CORS Declaration & Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/tasks', tasksRoute);
app.use('/users', usersRoute);

//Running server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is up');
})
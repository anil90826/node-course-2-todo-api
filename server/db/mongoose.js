const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//connect to the mongooose
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = { mongoose };
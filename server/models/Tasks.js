const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: String,
  completed: Boolean,
})

module.exports = mongoose.model('Tasks', TaskSchema);
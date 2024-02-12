const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  updateDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  deletionDate: {
    type: Date
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
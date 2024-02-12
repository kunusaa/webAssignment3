const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  query: {
    type: String
  },
  queryDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('History', HistorySchema);
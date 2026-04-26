const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: String,
  fileUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', MessageSchema);

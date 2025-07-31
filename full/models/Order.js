const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    tableId: String,
  items: String,
  status: String,
  createdAt: Date,
  total: Number
})

module.exports = mongoose.model('order',userSchema)
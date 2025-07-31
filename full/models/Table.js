const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String, 
    seats: Number,
    status: String
})

module.exports = mongoose.model('Table',userSchema)
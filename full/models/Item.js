const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    available: Boolean,
})

module.exports = mongoose.model('Item',userSchema)



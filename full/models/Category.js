const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    category:String
})


module.exports = mongoose.model('Category',userSchema)


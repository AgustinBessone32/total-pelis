const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema ({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    favorites: [{
        idMovie : Number,
        image : String,
        name: String
    }]

})

module.exports = mongoose.model('users', userSchema)
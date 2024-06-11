const mongoose = require("mongoose");
const schema = mongoose.Schema

const Userschema = new schema({
    user_id: {
        type: String,
        required: true,
        unique : true
    },
    UUID: {
        type: String,
        required: true,
        unique : true
    },
    email : {
        type: String,
        required: true,
        unique : true
    },
     level: {
        type: String,
        required: true,
    },
}, { timestamp : true})

module.exports = mongoose.model('User', Userschema)
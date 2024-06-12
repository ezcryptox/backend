const mongoose = require("mongoose");
const schema = mongoose.Schema

const Userschema = new schema({
    user_id: {
        type: String,
        required: true,
        unique : true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
    },
    phone : {
        type: String,
    },
    fa_auth : {
        type: Boolean,
        required: true
    },
    created_at : {
        type: Date,
        required: true
    },
    lastLoginAt : {
        type: Date,
        required: true
    },
    loginWithGoogle: {
        type: Boolean,
        required: true
    },
    passkey: {
        type: Boolean,
        required: true
    },
}, { timestamp : true})

module.exports = mongoose.model('userAuth', Userschema)
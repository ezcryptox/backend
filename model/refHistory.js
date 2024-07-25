const mongoose = require("mongoose");
const schema = mongoose.Schema

const refHistorySchema = new schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    refCode: {
        type: String,
    },
}, { timestamp: true })

module.exports = mongoose.model('refHistory', refHistorySchema)
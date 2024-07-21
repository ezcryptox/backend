const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;

const NotificationSchema = new schema({
  type: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ""
  },
  link: {
    type: String,
  },
  icon: {
    type: String,
    required: true
  },
  readStatus: {
    type: Number,
    default: 1
  },
  timestamp: {
    type: Number,
    default: Date.now,
  }
}, { timestamps: true });

NotificationSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Notification', NotificationSchema);
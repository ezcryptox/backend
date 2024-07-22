const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;

const CryptoBuyOrderSchema = new schema({
  trans_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true,
  },
  fiat: {
    type: String,
    required: true
  },
  walletAddress: {
    type: String,
  },
  crypto: {
    type: String,
    required: true
  },
  fiatAmount: {
    type: Number,
  },
  cryptoAmount: {
    type: Number,
  },
  feeAmount: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  status: {
    type: String,
    default: "pending"
  },
  timestamp: {
    type: Number,
    default: Date.now,
  }
}, { timestamps: true });

CryptoBuyOrderSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'crypto_buy_counter' });

module.exports = mongoose.model('CryptoBuyOrder', CryptoBuyOrderSchema);
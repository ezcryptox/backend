const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;

const CryptoAssetSchema = new schema({
  tatumAccountID: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
  },
  mnemonic: {
    type: String,
  },
  privateKey: {
    type: String,
  },
  walletAddress: {
    type: String,
    required: true
  },
  depositAddress: {
    type: String,
    required: true
  },
}, { timestamps: true });

CryptoAssetSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'crypto_asset_counter' });

module.exports = mongoose.model('CryptoAsset', CryptoAssetSchema);
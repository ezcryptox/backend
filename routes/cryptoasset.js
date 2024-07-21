const express = require('express');
const router = express.Router();
const { getWalletAddress, tatumWebHook } = require('../controllers/cryptoasset');
const requireAuth = require('../middleware/requireAuth')

router.get('/wallet-address', requireAuth, getWalletAddress);
router.post('/webhook', tatumWebHook)

module.exports = router;
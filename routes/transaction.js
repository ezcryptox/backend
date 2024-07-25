const express = require('express');
const router = express.Router();
const { signUrl, listCurrencies, getRate, moonPayWebHook, getBuyOrderList } = require('../controllers/transaction');
const requireAuth = require('../middleware/requireAuth')

router.post('/sign-url', requireAuth, signUrl);
router.get('/list-currencies', listCurrencies);
router.get('/get-rates', getRate);
router.get('/webhook', moonPayWebHook);
router.get('/list-orders', getBuyOrderList);

module.exports = router;
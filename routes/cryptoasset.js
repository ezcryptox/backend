const express = require('express');
const router = express.Router();
const { getWalletAddress, tatumWebHook, signWebHook } = require('../controllers/cryptoasset');
const requireAuth = require('../middleware/requireAuth')

router.get('/wallet-address', requireAuth, getWalletAddress);
router.post('/webhook', tatumWebHook)



//TODO VERY IMPORTANT, CALL ONCE FOR TATUM MAINNET API KEY
router.put('/sign-webhook', async (req, res) => {
  try {
    await signWebHook()
    res.status(200).json("Success")
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

module.exports = router;
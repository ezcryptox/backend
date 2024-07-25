const express = require('express')
const router = express.Router()
const {handleReferralLeaderBoard} = require("../controllers/profile")

router.get("/leaderboard", handleReferralLeaderBoard)

module.exports = router
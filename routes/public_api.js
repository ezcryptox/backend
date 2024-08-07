const express = require('express')
const router = express.Router()
const { handleGiveAway } = require("../public_api/giveways");
const {handleReferralLeaderBoard} = require("../controllers/profile")

router.get("/", handleGiveAway)
router.get("/leaderboard", handleReferralLeaderBoard)

module.exports = router
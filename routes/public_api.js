const express = require('express')
const router = express.Router()
const { handleGiveAway } = require("../public_api/giveways")

router.get("/", handleGiveAway)

module.exports = router
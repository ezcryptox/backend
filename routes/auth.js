const express = require('express')
const router = express.Router()
const { handleLoginAuth , handleSignAuth, handleCreateUserAuth} = require("../authControllers/usersAuth")


router.post("/login-user", handleLoginAuth)
router.post("/sign-up", handleSignAuth)
router.post("/create-user", handleCreateUserAuth)

module.exports = router
const express = require('express')
const router = express.Router()
const { handleUserProfile , handleUserSecurity} = require("../controllers/profile")
const requireAuth = require('../middleware/requireAuth')

// ========================= MiddleWare ========================
router.use(requireAuth)


// ==================== Routes ================================
router.get("/", handleUserProfile)
router.get("/security", handleUserSecurity)

module.exports = router
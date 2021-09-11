const router=require("express").Router()

const { registerUser, loginUser, logout } = require("../controllers/authController");

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logout)

module.exports=router
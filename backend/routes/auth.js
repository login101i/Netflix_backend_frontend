const router=require("express").Router()

const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, allUsers, getUserDetails, updateUser, deleteUser } = require("../controllers/authController");

const {isAuthenticatedUser, authorizeRoles}=require('../middlewares/auth')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logout)
router.post('/password/forgot', forgotPassword)
router.post("/password/reset/:token", resetPassword);
router.post("/me",isAuthenticatedUser, getUserProfile);
router.put("/password/update",isAuthenticatedUser, updatePassword);
router.put("/me/update",isAuthenticatedUser, updateProfile);
router.get("/admin/users", isAuthenticatedUser, authorizeRoles(), allUsers);
router.get("/admin/user/:id", isAuthenticatedUser, authorizeRoles(), getUserDetails);
router.put("/admin/user/:id", isAuthenticatedUser, authorizeRoles(), updateUser);
router.delete("/admin/user/:id", isAuthenticatedUser, authorizeRoles(), deleteUser);

module.exports=router
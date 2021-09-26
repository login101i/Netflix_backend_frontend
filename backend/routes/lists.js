const router = require("express").Router();

const { createList, deleteList, getList } = require("../controllers/listController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.post("/admin/newList", isAuthenticatedUser, authorizeRoles(), createList);
router.delete("/admin/deleteList", isAuthenticatedUser, authorizeRoles(), deleteList);
router.get("/getlist", isAuthenticatedUser, authorizeRoles(), getList);

module.exports = router;

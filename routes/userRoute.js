const express = require("express");
const { getAllUsers,signUp, signIn, logout } = require("../controllers/userController");
const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/logout").get(logout);



module.exports = router;
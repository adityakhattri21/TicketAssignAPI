const express = require("express");
const { getAllUsers, addUser } = require("../controllers/userController");
const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/signup").post(addUser);



module.exports = router;
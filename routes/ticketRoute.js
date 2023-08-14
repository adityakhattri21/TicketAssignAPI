const express = require('express');
const { generateTicket, getAllTicket, searchTicket } = require('../controllers/ticketController');
const {isAuthenticatedUser} = require("../middlewares/auth");

const router = express.Router();

router.route("/ticket/create").post(isAuthenticatedUser,generateTicket);
router.route("/ticket/all").get(isAuthenticatedUser,getAllTicket);
router.route("/ticket/:id").get(isAuthenticatedUser,searchTicket);

module.exports = router;
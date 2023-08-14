const express = require('express');
const { generateTicket, getAllTicket } = require('../controllers/ticketController');

const router = express.Router();

router.route("/ticket/create").post(generateTicket);
router.route("/ticket/all").get(getAllTicket);

module.exports = router;
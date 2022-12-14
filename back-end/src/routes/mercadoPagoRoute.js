const express = require("express");
const router = express.Router();
const controller = require("../controllers/mercadoPagoController.js")

router.post('/', controller.createPayment);
router.post('/feedback', controller.feedback);

module.exports = router;
const express = require("express");
const router = express.Router();
const controller = require("../controllers/emailController")

router.post('/registerSubscribe', controller.subscribe);
router.post('/registerPayer', controller.registerPayer);
router.post('/add', controller.registerEmail);

module.exports = router;
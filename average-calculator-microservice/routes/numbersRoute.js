const express = require("express");
const router = express.Router();
const numbersController = require("../controllers/numbersController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/:numberid", authMiddleware, numbersController.getNumbers);

module.exports = router;

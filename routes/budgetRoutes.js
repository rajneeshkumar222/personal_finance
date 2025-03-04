const express = require("express");
const { setBudget, getBudgets } = require("../controllers/budgetController");
const router = express.Router();
router.post("/", setBudget);
router.get("/", getBudgets);
module.exports = router;
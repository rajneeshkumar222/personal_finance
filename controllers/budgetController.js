const Budget = require("../models/Budget");
exports.setBudget = async (req, res) => {
  try {
    const budget = await Budget.create(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
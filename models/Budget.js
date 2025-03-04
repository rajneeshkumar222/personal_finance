const mongoose=require("mongoose");

const BudgetSchema = new mongoose.Schema({
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    month: { type: String, required: true },
  });
  module.exports = mongoose.model("Budget", BudgetSchema);
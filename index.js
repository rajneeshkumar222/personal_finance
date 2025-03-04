require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Personal Finance API is running!");
});

// Routes
app.use("/api/v1/transactions", transactionRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/budget", budgetRoutes);

// Error handling
app.use(errorHandler);

// ❌ Remove this line (Vercel does not use app.listen)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // ✅ Export app for Vercel

const express = require('express');
const app = express();

// Middleware: Parse JSON request bodies
app.use(express.json());

// Route: GET /
app.get('/',(req, res) => {
  res.json({ message: "Welcome to the Book API! 📚" });
});

// Start server:
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
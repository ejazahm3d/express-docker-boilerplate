const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./config/db");

// Connect Database

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(morgan("dev"));
// Test
app.get("/", async (req, res) => {
  return db
    .select("*")
    .from("values")
    .then(values => console.log(values));
});
// Define Routes
app.use("/api/values", require("./routes/api/valuesRouter"));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

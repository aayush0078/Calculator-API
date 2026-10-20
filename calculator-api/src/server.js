const express = require("express");
const cors    = require("cors");
const calculateRouter = require("./routes/calculate");

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────

/** Health check */
app.get("/", (req, res) => {
  res.json({
    name: "calculator-api",
    version: "1.0.0",
    endpoints: [
      "POST /calculate/add",
      "POST /calculate/subtract",
      "POST /calculate/multiply",
      "POST /calculate/divide",
      "POST /calculate/power",
      "POST /calculate/modulo",
      "POST /calculate/sqrt",
    ],
  });
});

app.use("/calculate", calculateRouter);

/** 404 handler */
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route ${req.method} ${req.path} not found.` });
});

/** Global error handler */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, error: "Internal server error." });
});

// ── Start ─────────────────────────────────────────────────────────────────────
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🧮 Calculator API running at http://localhost:${PORT}`);
  });
}

module.exports = app; // exported for testing

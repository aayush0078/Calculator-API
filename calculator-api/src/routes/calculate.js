const { Router } = require("express");
const calc = require("../calculator");

const router = Router();

/**
 * Validate that a request body has valid numeric operands.
 * Returns { a, b, error } — error is a string if validation fails.
 */
function parseOperands(body, requireB = true) {
  const a = Number(body.a);
  const b = Number(body.b);

  if (body.a === undefined || body.a === "") {
    return { error: "Missing operand 'a'." };
  }
  if (isNaN(a)) return { error: "'a' must be a number." };

  if (requireB) {
    if (body.b === undefined || body.b === "") {
      return { error: "Missing operand 'b'." };
    }
    if (isNaN(b)) return { error: "'b' must be a number." };
  }

  return { a, b };
}

function handleCalc(fn, req, res, requireB = true) {
  try {
    const { a, b, error } = parseOperands(req.body, requireB);
    if (error) return res.status(400).json({ success: false, error });
    const result = fn(a, b);
    return res.json({ success: true, result });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
}

// ── Binary operations ────────────────────────────────────────────────────────

/** POST /calculate/add      { a, b } */
router.post("/add",      (req, res) => handleCalc(calc.add,      req, res));

/** POST /calculate/subtract { a, b } */
router.post("/subtract", (req, res) => handleCalc(calc.subtract, req, res));

/** POST /calculate/multiply { a, b } */
router.post("/multiply", (req, res) => handleCalc(calc.multiply, req, res));

/** POST /calculate/divide   { a, b } */
router.post("/divide",   (req, res) => handleCalc(calc.divide,   req, res));

/** POST /calculate/power    { a, b } */
router.post("/power",    (req, res) => handleCalc(calc.power,    req, res));

/** POST /calculate/modulo   { a, b } */
router.post("/modulo",   (req, res) => handleCalc(calc.modulo,   req, res));

// ── Unary operations ─────────────────────────────────────────────────────────

/** POST /calculate/sqrt     { a } */
router.post("/sqrt", (req, res) => {
  try {
    const { a, error } = parseOperands(req.body, false);
    if (error) return res.status(400).json({ success: false, error });
    const result = calc.sqrt(a);
    return res.json({ success: true, result });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;

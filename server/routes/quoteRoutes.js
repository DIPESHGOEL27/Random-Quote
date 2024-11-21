const express = require("express");
const {
  getQuote,
  addQuote,
  getAllQuotes,
  updateQuote,
  deleteQuote,
} = require("../controllers/quoteController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();



router.get("/all", getAllQuotes); // Route to get all quotes
router.get("/random", getQuote);  // Route to get a random quote

router.post("/", authMiddleware, addQuote);
// router.put('/:id', authMiddleware, updateQuote);
// router.delete('/:id', authMiddleware, deleteQuote);

module.exports = router;

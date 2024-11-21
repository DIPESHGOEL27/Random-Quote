const Quote = require("../models/quote");

exports.getQuote = async (req, res) => {
  try {
    const quotes = await Quote.aggregate([{ $sample: { size: 1 } }]);
    res.json(quotes[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quote", error });
  }
};

// Fetch all quotes
exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find(); // Fetch quotes from the database
    res.json(quotes); // Send quotes as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching quotes", error });
  }
};

exports.addQuote = async (req, res) => {
  const { text, author } = req.body;
  const quote = new Quote({ text, author });

  try {
    await quote.save();
    res.status(201).json({ message: "Quote added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding quote", error });
  }
};

exports.updateQuote = async (req, res) => {
  const { id } = req.params;
  const { text, author } = req.body;

  try {
    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      { text, author },
      { new: true }
    );
    res.json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: "Error updating quote", error });
  }
};

exports.deleteQuote = async (req, res) => {
  const { id } = req.params;

  try {
    await Quote.findByIdAndDelete(id);
    res.json({ message: "Quote deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting quote", error });
  }
};

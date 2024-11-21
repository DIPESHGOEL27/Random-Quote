import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteDisplay = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomQuote, setRandomQuote] = useState(null); // Initialize randomQuote as null
  const [firstQuoteFetched, setFirstQuoteFetched] = useState(false); // Track whether the first quote is fetched

  useEffect(() => {
    fetchRandomQuote();
  }, []); // Fetch the random quote when the component mounts

  const fetchRandomQuote = () => {
    setLoading(true); // Set loading to true when fetching data
    // Fetch data from the backend server
    axios
      .get("http://localhost:5000/api/quotes/all")
      .then((response) => {
        setQuoteData(response.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setLoading(false); // Set loading to false even on error to handle the case where no quotes are available
      });
  };

  const getRandomQuote = () => {
    if (quoteData.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    return quoteData[randomIndex];
  };

  const handleGetRandomQuote = () => {
    if (firstQuoteFetched) {
      // If the first quote is fetched, get another quote and update randomQuote
      setRandomQuote(getRandomQuote());
    } else {
      // If the first quote is not fetched, fetch the first quote
      setRandomQuote(getRandomQuote());
      setFirstQuoteFetched(true);
    }
  };

  return (
    <div>
      <h3>Random Quote</h3>
      {loading ? (
        <p>Loading...</p>
      ) : quoteData.length === 0 ? (
        <p>No quotes found.</p>
      ) : (
        <>
          {randomQuote ? (
            <>
              <h4 className="Quote">{randomQuote.quote}</h4>
              <p className="Author">- {randomQuote.author}</p>
            </>
          ) : (
            <p>
              Click the button to get a random quote.
              <br />
            </p>
          )}
          <button className="GetQuoteButton" onClick={handleGetRandomQuote}>
            {firstQuoteFetched && randomQuote
              ? "Get Another Quote"
              : "Get Quote"}
          </button>
        </>
      )}
    </div>
  );
};

export default QuoteDisplay;

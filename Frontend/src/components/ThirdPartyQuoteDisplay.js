import React, { useState } from 'react';
import axios from 'axios';

const ThirdPartyQuoteDisplay = () => {
  const [randomQuote, setRandomQuote] = useState({}); // Initialize randomQuote as an empty object

  const fetchRandomQuote = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((response) => {
        setRandomQuote(response.data);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  };

  return (
    <div>
      <h3>Random Quote from Random Quotes API</h3>
      {randomQuote.content ? ( // Check if content exists to determine if the quote is fetched
        <>
          <h4 className='Quote'>{randomQuote.content}</h4>
          <p className='Author'>- {randomQuote.author}</p>
          <button className="GetQuoteButton" onClick={fetchRandomQuote}>
            Get Another Quote
          </button>
        </>
      ) : (
        <>
          <p>Click the button to get a random quote.</p>
          <button className="GetQuoteButton" onClick={fetchRandomQuote}>
            Get Quote
          </button>
        </>
      )}
    </div>
  );
};

export default ThirdPartyQuoteDisplay;

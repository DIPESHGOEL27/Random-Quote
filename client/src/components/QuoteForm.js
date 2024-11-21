import React, { useState } from 'react';
import axios from 'axios';
import './QuoteForm.css'; // Import the CSS file

const QuoteForm = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newQuote = {
      quote: quote,
      author: author,
    };

    // Replace 'http://localhost:5050' with your backend server URL
    axios.post('http://localhost:5000/quote', newQuote)
      .then((response) => {
        console.log('Quote successfully added:', response.data);
        // Handle any additional logic here after successfully adding the quote
        setQuote('');
        setAuthor('');
      })
      .catch((error) => {
        console.error('Error adding quote:', error);
        // Handle error state or display error message to the user
      });
  };

  return (
    <form className="quote-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="quote-input"
        placeholder=" Enter Quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        required
      />
      <br/>
      <input
        type="text"
        className="author-input"
        placeholder="Enter Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <br/>
      <button type="submit" className="GetQuoteButton">
        Submit Quote
      </button>
    </form>
  );
};

export default QuoteForm;

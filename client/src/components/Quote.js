import React, { useState } from "react";
import axios from "axios";
import QuoteDisplay from "./QuoteDisplay";
import QuoteForm from "./QuoteForm";


function Quote({ isAdmin, refreshQuotes }) {
  const [newQuote, setNewQuote] = useState("");

  const addQuote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/quotes",
        { quote: newQuote },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewQuote("");
      refreshQuotes();
    } catch (error) {
      console.error("Error adding quote:", error);
      alert("Could not add quote.");
    }
  };

  return (
    <div>
      <h2>Add New Quote</h2>
      <QuoteForm></QuoteForm>
        
    </div>
  );
}

export default Quote;

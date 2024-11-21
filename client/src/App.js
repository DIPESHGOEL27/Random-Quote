import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Quote from "./components/Quote";
import Login from "./components/Login";
import react_logo from "./assets/react_logo.png";
import QuoteDisplay from "./components/QuoteDisplay";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   fetchQuotes();
  // }, []);

  // const fetchQuotes = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/quotes/random"
  //     );
  //     setQuotes(response.data);
  //   } catch (error) {
  //     console.error("Error fetching quotes:", error);
  //   }
  // };

  useEffect(() => {
    // Fetch quotes from the backend
    fetch("http://localhost:5000/api/quotes/all")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setQuotes(data); // Update the state with the quotes array
        } else {
          console.error("Unexpected response format:", data);
          setQuotes([]); // Set to an empty array to avoid errors
        }
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
        setQuotes([]); // Fallback in case of an error
      });
  }, []);

  const handleLogin = (status) => {
    setIsAdmin(status);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Random Quote Generator</h1>
      </header>
      <main className="main-content">
        <QuoteDisplay></QuoteDisplay>
        {isAdmin ? (
          <Quote isAdmin={isAdmin} />
        ) : (
          <Login onLogin={handleLogin} />
        )}

        {/* <div className="quotes-list">
          {quotes.length > 0 ? (
            quotes.map((quote) => (
              <div key={quote._id}>
                <p>{quote.quote}</p>
                <p>— {quote.author}</p>
              </div>
            ))
          ) : (
            <p>No quotes found.</p>
          )}
        </div> */}
      </main>

      <footer className="Footer">
        <p className="copyright">
          COPYRIGHT &copy; {new Date().getFullYear()}, ALL RIGHTS RESERVED
        </p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/dipeshgoel27/"
            target="_blank"
            rel="noreferrer"
          >
            Dipesh Goel
          </a>{" "}
          using <img src={react_logo} alt="React Logo" className="React-logo" />{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import QuoteForm from './QuoteForm';
import QuoteDisplay from './QuoteDisplay';
import ThirdPartyQuoteDisplay from './ThirdPartyQuoteDisplay';

const QuoteOptions = () => {
  const [option, setOption] = useState(null);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <h2>Choose an option:</h2>
      <select value={option} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="enter">Enter Quote</option>
        <option value="ownServer">Get Quote from Our Server</option>
        <option value="thirdParty">Get Quote from Third-Party API</option>
      </select>

      {option === 'enter' && <QuoteForm />}
      {option === 'ownServer' && <QuoteDisplay />}
      {option === 'thirdParty' && <ThirdPartyQuoteDisplay />}
    </div>
  );
};

export default QuoteOptions;

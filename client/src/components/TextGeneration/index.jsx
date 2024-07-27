import React, { useState } from 'react';

const TextGeneration = () => {
  const [inputData, setInputData] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleQuery = async () => {
    try {
      const data = { inputs: inputData };

      const response = await fetch(
        'https://api-inference.huggingface.co/models/google/gemma-7b',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error('Error querying:', error);
    }
  };

  return (
    <div>
      <input
    className='form_input'
    type="text"
    placeholder="Enter data for query"
    value={inputData}
    onChange={handleInputChange}
  />
  <button className='form_button' onClick={handleQuery}>Generate Text</button>

      {result && (
        <div>
          <h2>Result:</h2>
          <div className='result_Div' style={{ width: '400px', height: '500px', overflowY: 'auto', overflowX: 'hidden' }}>
        <p>{result[0].generated_text}</p>
      </div>
        </div>
      )}
    </div>
  );
};

export default TextGeneration;

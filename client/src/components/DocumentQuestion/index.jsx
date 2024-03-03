import React, { useState } from 'react';

const DocumentQuestion = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleQuestionChange = (event) => {
    const value = event.target.value;
    setQuestion(value);
  };

  const handleQuery = async () => {
    try {
      if (!file) {
        console.error('Please select a file');
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const binaryData = fileReader.result;

        const payload = {
          inputs: {
            image: btoa(binaryData), // Convert binary data to base64
            question: question,
          },
        };

        const response = await fetch(
          'https://api-inference.huggingface.co/models/impira/layoutlm-document-qa',
          {
            method: 'POST',
            headers: {
              Authorization: 'Bearer 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',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }
        );

        const result = await response.json();
        setResult(result);
      };

      fileReader.readAsBinaryString(file);
    } catch (error) {
      console.error('Error processing file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={handleQuestionChange}
      />
      <button onClick={handleQuery}>Query</button>

      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DocumentQuestion;

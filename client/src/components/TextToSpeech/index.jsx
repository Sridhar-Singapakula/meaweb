import React, { useState } from 'react';

const TextToSpeech = () => {
  const [inputData, setInputData] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleQuery = async () => {
    try {
      const data = { inputs: inputData };

      const response = await fetch(
        'https://api-inference.huggingface.co/models/facebook/mms-tts-eng',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const blobData = await response.blob();

      // Assuming you want to play the audio, you can create a data URL
      const audioDataUrl = URL.createObjectURL(blobData);
      setAudioUrl(audioDataUrl);
    } catch (error) {
      console.error('Error querying:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter data for query"
        value={inputData}
        onChange={handleInputChange}
      />
      <button onClick={handleQuery}>Query</button>

      {audioUrl && (
        <div>
          <h2>Result Audio:</h2>
          <audio controls>
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;

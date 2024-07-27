import React, { useState } from 'react';
import "./style.css";
import { useHistory } from 'react-router-dom';

const ImageClassifier = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    await processAndQuery(selectedFile);
    setFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    await processAndQuery(selectedFile);
    setFile(selectedFile);
  };

  const processAndQuery = async (selectedFile) => {
    try {
      if (!selectedFile) {
        console.error('Please select a file');
        return;
      }

      setLoading(true);

      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const binaryData = fileReader.result;
        const response = await fetch(
          'https://api-inference.huggingface.co/models/microsoft/resnet-50',
          {
            method: 'POST',
            body: binaryData,
            headers: {
              Authorization: 'Bearer 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',
              'Content-Type': 'image/jpeg',
            },
          }
        );

        const result = await response.json();

        if (result.error && result.error.includes('currently loading')) {
          setError('Model is still loading. Retrying in 20 seconds...');
          setTimeout(() => processAndQuery(selectedFile), 20000); // Retry after 20 seconds
        } else {
          setResult(result);
          setError(null);
        }

        setLoading(false);
      };

      fileReader.readAsArrayBuffer(selectedFile);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
      setLoading(false);
    }
  };
  console.log(file)

  return (
    <div>
      <div
        style={{
          width: '500px',
          height: '200px',
          border: '2px dashed #aaaaaa',
          position: 'relative',
          background:"rgb(238, 238, 238)",
          padding:"20px",
          borderRadius:"10px",
          marginBottom:"50px"
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
       
         <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><i class="bi bi-card-image"></i> Drop or Upload Image</p>
      </div>
      <div className='drop'>
            <input type="file" onChange={handleFileChange} className='input_btn'/>

      {loading && <div className='div_loader'></div>}

      {error && <p>Error: {error}</p>}
      {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="Selected"
            style={{ width: '500px', height: '300px', objectFit: 'cover' ,marginTop:"50px",marginBottom:"50px"}}
          />
        )}

      </div>

      
     
      {result && (
  <div className='result'>
    <h2>Result:</h2>
    {result.map((item, index) => (
     <div>
      <p className='label_'>{item.label}</p>
      <div className='toflex'>
      <div
        key={index}
        style={{
          height: '10px',
          width: `${item.score * 1500}px`,
          background: `linear-gradient(to right, #3498db, #2ecc71)`,
          marginBottom: '5px',
        }}
      ></div>
      <p className='label_'>{item.score}</p>
        </div>
     
      </div>
      
    ))}
  </div>
)}

    </div>
  );
};

export default ImageClassifier;

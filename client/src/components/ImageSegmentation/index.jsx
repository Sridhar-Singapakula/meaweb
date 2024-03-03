import React, { useState } from 'react';

const ImageSegmentation = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleQuery = async () => {
    try {
      if (!file) {
        console.error('Please select an image file');
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const fileData = fileReader.result;

        const response = await fetch(
          'https://api-inference.huggingface.co/models/mattmdjaga/segformer_b2_clothes',
          {
            method: 'POST',
            headers: {
              Authorization: 'Bearer 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',
              'Content-Type': 'image/jpeg', // Set the appropriate content type
            },
            body: fileData,
          }
        );

        const result = await response.json();
        console.log(result);
      };

      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error querying:', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".jpg, .jpeg" onChange={handleFileChange} />
      <button onClick={handleQuery}>Query</button>
    </div>
  );
};

export default ImageSegmentation;

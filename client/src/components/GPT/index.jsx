import React, { useState } from 'react';

const GPT = () => {
  const [pat, setPat] = useState('0c18b29c5de14df2bf85ef9c4506d2ac');
  const [userId, setUserId] = useState('clarifai');
  const [appId, setAppId] = useState('main');
  const [modelId, setModelId] = useState('general-image-detection');
  const [modelVersionId, setModelVersionId] = useState('1580bb1932594c93b7e2e04456af7c6f');
  const [imageUrl, setImageUrl] = useState('https://samples.clarifai.com/metro-north.jpg');
  const [outputData, setOutputData] = useState([]);

  const handleQuery = async () => {
    try {
      const rawInput = JSON.stringify({
        "user_app_id": {
          "user_id": userId,
          "app_id": appId
        },
        "inputs": [
          {
            "data": {
              "image": {
                "url": imageUrl
              }
            }
          }
        ]
      });

      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': '' + pat
        },
        body: rawInput
      };

      const response = await fetch(`https://api.clarifai.com/v2/models/${modelId}/versions/${modelVersionId}/outputs`, requestOptions);
      const result = await response.json();

      if (result.status.code !== 10000) {
        console.log(result.status);
      } else {
        const regions = result.outputs[0].data.regions;
        const outputArray = [];

        regions.forEach(region => {
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          region.data.concepts.forEach(concept => {
            const name = concept.name;
            const value = concept.value.toFixed(4);

            outputArray.push({
              name,
              value,
              topRow,
              leftCol,
              bottomRow,
              rightCol
            });
          });
        });

        setOutputData(outputArray);
      }
    } catch (error) {
      console.error('Error querying:', error);
    }
  };

  return (
    <div>
      <label>
        PAT (Personal Access Token):
        <input type="text" value={pat} onChange={(e) => setPat(e.target.value)} />
      </label>
      <br />
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <br />
      <label>
        App ID:
        <input type="text" value={appId} onChange={(e) => setAppId(e.target.value)} />
      </label>
      <br />
      <label>
        Model ID:
        <input type="text" value={modelId} onChange={(e) => setModelId(e.target.value)} />
      </label>
      <br />
      <label>
        Model Version ID:
        <input type="text" value={modelVersionId} onChange={(e) => setModelVersionId(e.target.value)} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <br />
      <button onClick={handleQuery}>Query</button>
      
      {outputData.length > 0 && (
        <div>
          <h2>Output Data:</h2>
          <ul>
            {outputData.map((item, index) => (
              <li key={index}>
                {`Name: ${item.name}, Value: ${item.value}, BBox: ${item.topRow}, ${item.leftCol}, ${item.bottomRow}, ${item.rightCol}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GPT;

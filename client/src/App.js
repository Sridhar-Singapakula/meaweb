import React, { useState, useEffect } from 'react';
// import DocumentQuestion from "./Components/DocumentQuestion"
import SummarizationPage from './Projects/Summarization';
// import TextGeneration from './Components/TextGeneration';
import TextToSpeechPage from './Projects/TextToSpeech';
// import AudioRecognition from './Components/AudioRecognition';
// import ImageSegmentation from './Components/ImageSegmentation';
// import GPT from './Components/GPT';
import { Main } from './Pages/Main';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import ImageClassifierPage from './Projects/ImageClassifier';
import TextGenerationPage from './Projects/TextGeneration';

const App = () => {
  

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/ImageClassifierPage" component={ImageClassifierPage}/>
        <Route path="/Summarization" component={SummarizationPage}/>
        <Route path="/TextGeneration" component={TextGenerationPage}/>
        <Route path="/TextToSpeech" component={TextToSpeechPage}/>
      </Switch>
    </div>
  );
};

export default App;

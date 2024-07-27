// models.js

const modelInfo = [
  {
    modelName: "Image Classifier",
    description: "Image Classification is a fundamental task in vision recognition that aims to understand and categorize an image as a whole under a specific label.",
    imgUrl: "https://b2633864.smushcdn.com/2633864/wp-content/uploads/2020/06/keras_classifier_object_detector_result02_update.png?lossy=2&strip=1&webp=1",
    developedBy: "Apple",
    logo:'<i class="bi bi-apple"></i>',
    githubLink: "https://github.com/example/audio-model-repo",
    rating: 200,
    category: "Image",
    LinkTo:"/ImageClassifierPage",
    isValid:"True"
  },
  {
    modelName: "Summarization",
    description: "Generate summaries of paragraphs or articles in one click. Our AI summarizer tool provides quick, concise copy that identifies important points in any text.",
    imgUrl: "https://sparkmailapp.com/img/blog/ai-summary-en.png?1592587369412",
    developedBy: "Google",
    logo:'<i class="bi bi-google"></i>',
    githubLink: "https://github.com/example/audio-model-repo",
    rating: 110,
    category: "Text",
    LinkTo:"/Summarization",
    isValid:"True"
  },
  {
    modelName: "Text Generation",
    description: "Audio recognition, also known as sound or audio classification, is a technology that involves the identification and categorization of audio signals or sounds.",
    imgUrl: "https://www.contentserv.com/hs-fs/hubfs/blog/EN/nlp-nlg-automated-text-generation-is-powering-content-creation.png?width=1140&height=700&name=nlp-nlg-automated-text-generation-is-powering-content-creation.png",
    developedBy: "Meta",
    logo:'<i class="bi bi-meta"></i>',
    githubLink: "https://github.com/example/audio-model-repo",
    rating: 212,
    category: "Audio",
    LinkTo:"/TextGeneration",
    isValid:"True"
  },
 
    {
      modelName: "Image Segmentation",
      description: "Identifies a variety of concepts in images and video including objects, themes, and more. Trained with over 10,000 concepts and 20M images.",
      imgUrl: "https://media.licdn.com/dms/image/D5612AQGWPRQl8czM5A/article-cover_image-shrink_600_2000/0/1684594625825?e=2147483647&v=beta&t=rirlHANBk3AYalUPf7r4HNWiqoE2xY7NsVTJ2FwLQLM",
      developedBy: "Meta",
      logo:'<i class="bi bi-meta"></i>',
      githubLink: "https://github.com/example/nlp-model-repo",
      rating: 100,
      LinkTo:"/ImageDetection",
      category: "Image",
      isValid:"False"
    },
    {
      modelName: "TextToSpeech",
      description: "Audio recognition, also known as sound or audio classification, is a technology that involves the identification and categorization of audio signals or sounds.",
      imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrHro6d3BTw7ZZ4IXgfb6_8aESB7-SsWfelDSSInZVamiMSnYpBZzGBaZBBrWxWwYgLqOHuOtroGvGjxrwzdUkhjwuIvM1u6chIblGKS1gQ6JVkjXr-Vztyk2zoYb1ylvhNgLgC5q6M-7LaiXT1xnAT96DvkPx89APNb8JEaz-1mnMRcfaOYYBHzQL/s1600/Text%20to%20Speech%20-%20Social%20-%201024x512.png",
      developedBy: "Meta",
      logo:'<i class="bi bi-meta"></i>',
      githubLink: "https://github.com/example/audio-model-repo",
      rating: 212,
      category: "Audio",
      LinkTo:"/TextToSpeech",
      isValid:"False"
    },
    
    {
      modelName: "Audio Recognition",
      description: "Audio recognition, also known as sound or audio classification, is a technology that involves the identification and categorization of audio signals or sounds.",
      imgUrl: "https://www.shaip.com/wp-content/uploads/2022/10/Blog_Applications-of-Voice-Recognition-Technology.jpg",
      developedBy: "Google",
      logo:'<i class="bi bi-google"></i>',
      githubLink: "https://github.com/example/audio-model-repo",
      rating: 512,
      category: "Audio",
      LinkTo:"/AudioRecognition",
      isValid:"False"
    },
   
    
    // Add more objects as needed
  ];
  
  export default modelInfo;
  
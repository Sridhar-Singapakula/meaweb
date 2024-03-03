import React,{ useRef } from 'react'
import Navbar from '../../Components/Navbar'
import "./style.css"
import ImageClassifier from "../../Components/ImageClassifier"

const ImageClassifierPage = () => {
    const textToCopy = `from transformers import AutoImageProcessor, ResNetForImageClassification
    import torch
    from datasets import load_dataset
    
    dataset = load_dataset("huggingface/cats-image")
    image = dataset["test"]["image"][0]
    
    processor = AutoImageProcessor.from_pretrained("microsoft/resnet-50")
    model = ResNetForImageClassification.from_pretrained("microsoft/resnet-50")
    
    inputs = processor(image, return_tensors="pt")
    
    with torch.no_grad():
        logits = model(**inputs).logits
    
    # model predicts one of the 1000 ImageNet classes
    predicted_label = logits.argmax(-1).item()
    print(model.config.id2label[predicted_label])`;
    const textRef = useRef(null);
  
    const handleCopyClick = () => {
      if (textRef.current) {
        textRef.current.select();
        document.execCommand('copy');
      }
    };
  return (
    <div>
        <Navbar/>
        <section className='t1'>
            <div className='desc1'>
                <h4>
                ResNet-50 v1.5
                </h4>
                <p>
                ResNet model pre-trained on ImageNet-1k at resolution 224x224. It was introduced in the paper Deep Residual Learning for Image Recognition by He et al.
                </p>
                <p>
                Disclaimer: The team releasing ResNet did not write a model card for this model so this model card has been written by the Hugging Face team.
                </p>
                <h4>
                Model description
                </h4>
                <p>
                ResNet (Residual Network) is a convolutional neural network that democratized the concepts of residual learning and skip connections. This enables to train much deeper models.
                </p>
                <p>
                This is ResNet v1.5, which differs from the original model: in the bottleneck blocks which require downsampling, v1 has stride = 2 in the first 1x1 convolution, whereas v1.5 has stride = 2 in the 3x3 convolution. This difference makes ResNet50 v1.5 slightly more accurate (~0.5% top1) than v1, but comes with a small performance drawback (~5% imgs/sec) according to Nvidia.
                </p>
               
                <img src="https://cdn-lfs.huggingface.co/datasets/huggingface/documentation-images/cd6b9b5c48bf3bc68a5ba981c1f374f90f5c0d52f19f1d74db85e3f42eee04f8?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27resnet_architecture.png%3B+filename%3D%22resnet_architecture.png%22%3B&response-content-type=image%2Fpng&Expires=1709723854&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwOTcyMzg1NH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5odWdnaW5nZmFjZS5jby9kYXRhc2V0cy9odWdnaW5nZmFjZS9kb2N1bWVudGF0aW9uLWltYWdlcy9jZDZiOWI1YzQ4YmYzYmM2OGE1YmE5ODFjMWYzNzRmOTBmNWMwZDUyZjE5ZjFkNzRkYjg1ZTNmNDJlZWUwNGY4P3Jlc3BvbnNlLWNvbnRlbnQtZGlzcG9zaXRpb249KiZyZXNwb25zZS1jb250ZW50LXR5cGU9KiJ9XX0_&Signature=I%7EAjA8nYaO1rEUsdJ0kn9r8Pl0wEI-Y%7EMqrsPWBpv%7EG8n5lDBiUk-1kXTo86FFYHr88Azxi1AuHcoYs1brEpXl%7EW97-kYL19dgxIDVlFPegtly5Xrn83lf%7EGpfFH%7E2fjLneOyM6UG%7EBDUsCNjcflejSdcZezBVV6yZ4rzZvftWsacg-8cQYOctR32WjE4Xc6MOs6tTqoDlZ60Ndjpc1xupxKWyyuV%7EEdBJu7%7E7X0mjE5xh85zEltXqfX2VnB6NMG%7EWhjbqQVDBar0FfYkjVTK34l1D5ImS7b1cIeLdxcxA6cXQR7o7NSHj-ZdVtpZ5QWW3zekRK7tE5mK7rdIKHnTg__&Key-Pair-Id=KVTP0A1DKRTAX" className='desc1_img'></img>
                <h4>Intended uses & limitations</h4>
                <p>You can use the raw model for image classification. See the model hub to look for fine-tuned versions on a task that interests you.</p>
                <h4>How to use</h4>
                <p>Here is how to use this model to classify an image of the COCO 2017 dataset into one of the 1,000 ImageNet classes:</p>
                <div  style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between",gap:"20px"}}>
                    <div className='area_'>
                        <textarea
                        className='desc_code'
                        ref={textRef}
                        readOnly
                        value={textToCopy}
                        style={{ width: '100%', minHeight: '600px', fontFamily: 'monospace' }}
                        />
                    </div>
                    <div className='copy'>
                        <button onClick={handleCopyClick} className='cpy'>&#x2398; Copy</button>
                    </div>
                </div>
            </div>
            <div className='try'>
                <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2020/10/19666dnn_cover.png" className='final_img'></img>
                <h4>Try it Out</h4>
                <div>
                    <ImageClassifier/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ImageClassifierPage
import React,{ useRef } from 'react'
import Navbar from '../../Components/Navbar'
import "./style.css"

import TextGeneration from '../../Components/TextGeneration'

const TextGenerationPage = () => {
    const textToCopy = `# pip install git+https://github.com/huggingface/transformers.git # TODO: merge PR to main
    from transformers import AutoModelForCausalLM, AutoTokenizer
    
    checkpoint = "bigcode/starcoder2-15b"
    device = "cuda" # for GPU usage or "cpu" for CPU usage
    
    tokenizer = AutoTokenizer.from_pretrained(checkpoint)
    # for multiple GPUs install accelerate and do model = AutoModelForCausalLM.from_pretrained(checkpoint, device_map="auto")
    model = AutoModelForCausalLM.from_pretrained(checkpoint).to(device)
    
    inputs = tokenizer.encode("def print_hello_world():", return_tensors="pt").to(device)
    outputs = model.generate(inputs)
    print(tokenizer.decode(outputs[0]))
    `;
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
                StarCoder2 LLM
                </h4>
                <p>
                StarCoder2-15B model is a 15B parameter model trained on 600+ programming languages from The Stack v2, with opt-out requests excluded. The model uses Grouped Query Attention, a context window of 16,384 tokens with a sliding window attention of 4,096 tokens, and was trained using the Fill-in-the-Middle objective on 4+ trillion tokens.
                </p>
                <p>
                Disclaimer: The team releasing ResNet did not write a model card for this model so this model card has been written by the Hugging Face team.
                </p>
                <h4>
                Model description
                </h4>
                <p>
                The model has been trained on source code from 600+ programming languages. The predominant language in source is English although other languages are also present. As such the model is capable to generate code snippets provided some context but the generated code is not guaranteed to work as intended. It can be inefficient, contain bugs or exploits. See the paper for an in-depth discussion of the model limitations.
                </p>
                <p>
                BART is particularly effective when fine-tuned for text generation (e.g. summarization, translation) but also works well for comprehension tasks (e.g. text classification, question answering). This particular checkpoint has been fine-tuned on CNN Daily Mail, a large collection of text-summary pairs.
                </p>
               
                <img src="https://www.bankinghub.eu/wp-content/uploads/2023/05/text-summarization-ai-training-prediction-modes-bankinghub.png" className='desc1_img'></img>
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
                <img src="https://assets-global.website-files.com/5f7ece8a7da656e8a25402bc/6375f420953f04fdc56aedd8_summarize.png" className='final_img' style={{width:"500px"}}></img>
                <h4>Try it Out</h4>
                <div>
                    <TextGeneration/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TextGenerationPage
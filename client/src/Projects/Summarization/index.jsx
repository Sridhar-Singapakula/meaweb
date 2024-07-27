import React,{ useRef } from 'react'
import Navbar from '../../components/Navbar'
import "./style.css"
import Summarization from "../../components/Summarization"

const SummarizationPage = () => {
    const textToCopy = `from transformers import pipeline

    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    
    ARTICLE = """ New York (CNN)When Liana Barrientos was 23 years old, she got married in Westchester County, New York.
    A year later, she got married again in Westchester County, but to a different man and without divorcing her first husband.
    Only 18 days after that marriage, she got hitched yet again. Then, Barrientos declared "I do" five more times, sometimes only within two weeks of each other.
    In 2010, she married once more, this time in the Bronx. In an application for a marriage license, she stated it was her "first and only" marriage.
    Barrientos, now 39, is facing two criminal counts of "offering a false instrument for filing in the first degree," referring to her false statements on the
    2010 marriage license application, according to court documents.
    Prosecutors said the marriages were part of an immigration scam.
    On Friday, she pleaded not guilty at State Supreme Court in the Bronx, according to her attorney, Christopher Wright, who declined to comment further.
    After leaving court, Barrientos was arrested and charged with theft of service and criminal trespass for allegedly sneaking into the New York subway through an emergency exit, said Detective
    Annette Markowski, a police spokeswoman. In total, Barrientos has been married 10 times, with nine of her marriages occurring between 1999 and 2002.
    All occurred either in Westchester County, Long Island, New Jersey or the Bronx. She is believed to still be married to four men, and at one time, she was married to eight men at once, prosecutors say.
    Prosecutors said the immigration scam involved some of her husbands, who filed for permanent residence status shortly after the marriages.
    Any divorces happened only after such filings were approved. It was unclear whether any of the men will be prosecuted.
    The case was referred to the Bronx District Attorney\'s Office by Immigration and Customs Enforcement and the Department of Homeland Security\'s
    Investigation Division. Seven of the men are from so-called "red-flagged" countries, including Egypt, Turkey, Georgia, Pakistan and Mali.
    Her eighth husband, Rashid Rajput, was deported in 2006 to his native Pakistan after an investigation by the Joint Terrorism Task Force.
    If convicted, Barrientos faces up to four years in prison.  Her next court appearance is scheduled for May 18.
    """
    print(summarizer(ARTICLE, max_length=130, min_length=30, do_sample=False))
    [{'summary_text': 'Liana Barrientos, 39, is charged with two counts of "offering a false instrument for filing in the first degree" In total, she has been married 10 times, with nine of her marriages occurring between 1999 and 2002. She is believed to still be married to four men.'}]`;
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
                BART (large-sized model), fine-tuned on CNN Daily Mail
                </h4>
                <p>
                BART model pre-trained on English language, and fine-tuned on CNN Daily Mail. It was introduced in the paper BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension by Lewis et al. and first released in [this repository (https://github.com/pytorch/fairseq/tree/master/examples/bart).
                </p>
                <p>
                Disclaimer: The team releasing ResNet did not write a model card for this model so this model card has been written by the Hugging Face team.
                </p>
                <h4>
                Model description
                </h4>
                <p>
                BART is a transformer encoder-encoder (seq2seq) model with a bidirectional (BERT-like) encoder and an autoregressive (GPT-like) decoder. BART is pre-trained by (1) corrupting text with an arbitrary noising function, and (2) learning a model to reconstruct the original text.
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
                    <Summarization/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SummarizationPage
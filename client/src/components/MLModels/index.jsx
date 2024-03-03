import React from 'react'
import image1 from "../../img/image1.png";
import "./style.css";

const MLModels = ({ model }) => {
  return (
    <div className='MLmodels'>
        <div className='info_models'>
            <div className='model_div'>Model</div>
            <h2>{model.modelName}</h2>
            <p className='models_div_p'>{model.description}</p>
            <div className='company'>
                <p className='by'> <span dangerouslySetInnerHTML={{ __html: model.logo }}></span> {model.developedBy} </p>
                <p><i class="bi bi-github" style={{fontSize:"20px"}}></i></p>
                <p><i class="bi bi-star-fill" style={{color:" #FFD700"}}></i> {model.rating}</p>
            </div>
        </div>
        <div>
            <img src={model.imgUrl} alt="Model" className='image_1'/>
        </div>
    </div>
  )
}

export default MLModels
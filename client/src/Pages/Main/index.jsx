import React from 'react'
import { useState } from 'react';
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom';
import "./style.css"
import MLModels from '../../Components/MLModels';
import modelInfo from '../../Components/Objects';

export const Main = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState(modelInfo);

  const handleSearch = () => {
    const filtered = modelInfo.filter(model =>
      model.modelName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredModels(filtered);
    setSearchTerm(''); // Clear the search term after filtering
  };
  const onlineTryOutModels = filteredModels.filter((model) => model.isValid === 'True');
  const githubCodeModels = filteredModels.filter((model) => model.isValid === 'False');

  return (
    <div>
        <Navbar/>
        <section className='head_'>
            <div className='main_atlan'>
            <h4 className='main_h4'>Discover AI Brilliance: Join Our Global Community</h4>
            <p className='main_p'>
            your one-stop destination for crafting powerful AI-driven applications. Uncover, create, and exchange innovative AI models, workflows, and app elements, all seamlessly integrated into Clarifai's user-friendly low code and no code platform. 
            </p>
            <div className='main_under'>
            <button className='button-46'>More About Us</button>
            <button className='button-67' style={{textAlign:"center"}}>Explore</button>
            </div>
            <p className='main_p'>Do follow us on: </p>
            <ul className='icons_'>
            <i class="bi bi-github"></i>
            <i class="bi bi-linkedin" style={{color:"#0A66C2"}}></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-youtube" style={{color:"#CD201F"}}></i>
            </ul>
            </div>
        </section>
        <section >
            <h4 className='cards_h4' style={{textAlign:"center",marginTop:"30px"}}>What makes us Different</h4>
            <div className='cards_atlan'>
            <div className='card_2'>
                <div className='card2_div'><i class="bi bi-globe-europe-africa" style={{color:"white",fontSize:"20px",marginRight:"10px"}}></i>Accessible</div>
                <p className='cards_p'>Wherever  in the world</p>
                <h2 className='card_h2'>24x7</h2>
            </div>
            <div className='card_1'>
                <i class="bi bi-play-circle-fill" style={{fontSize:"35px",color:"white"}}></i>
                <p className='cards_p'>Daily users</p>
                <h2 className='card_h2'>400+</h2>
            </div>
            <div className='card_3'>
                 <div className='card2_div'><i class="bi bi-graph-up-arrow" style={{color:"white",fontSize:"20px",marginRight:"10px"}}></i>Growing</div>
                <p className='cards_p'>Fast Growing Community</p>
                <h2 className='card_h2'>ML models</h2>
            </div>
            </div>
        </section>
        <section className='models'>
        <h4 className='cards_h4' style={{textAlign:"center",marginTop:"30px"}}>Explore Models By our community</h4>
        <div className='search_box'>
        <input
          type="text"
          placeholder="Search by model name..."
          value={searchTerm}
          className='search_bar'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className='button-46'><i class="bi bi-search" style={{marginRight:"10px"}}></i> Search</button>
      </div>
      <div className='MLmodels_'>
          <div>
            <h2>Online Try Out Models</h2>
            {onlineTryOutModels.map((model, index) => (
              <Link to={model.LinkTo} key={index} style={{ textDecoration: 'none' }}>
                <MLModels model={model} />
              </Link>
            ))}
          </div>
          <div>
            <h2>GithubCode MLmodels</h2>
            {githubCodeModels.map((model, index) => (
              <Link to={model.LinkTo} key={index} style={{ textDecoration: 'none' }}>
                <MLModels model={model} />
              </Link>
            ))}
          </div>
        </div>
        </section>
        <section className='down_sec'>
            <div className='down'>
                <div className='down_1'>
                <div style={{width:"70px",height:"70px",background:"rgb(219, 216, 249)",alignItems:"center",display:"flex",justifyContent:"center",borderRadius:"10px"}}><i class="bi bi-discord" style={{fontSize:"30px",color:"rgb(99, 86, 238)"}}></i></div>
                </div>
                <div className='down_info'>
                    <h4>
                    Join our Discord Channel
                    </h4>
                    <p>
                    Post questions, talk to core engineers and share knowledge with other AI builders.
                    </p>
                    <p style={{textDecoration:"underline",color:"rgb(127, 153, 241)"}}>
                    Join Discord channel
                    </p>
                </div>
            </div>

            <div className='down'>
                <div className='down_1'>
                <div style={{width:"70px",height:"70px",background:"rgb(224, 247, 224)",alignItems:"center",display:"flex",justifyContent:"center",borderRadius:"10px"}}><i class="bi bi-play-circle-fill" style={{fontSize:"30px",color:"rgb(7, 107, 7)"}}></i></div>
                </div>
                <div className='down_info'>
                    <h4>
                    Community Video Tutorial
                    </h4>
                    <p>
                    Post questions, talk to core engineers and share knowledge with other AI builders.
                    </p>
                    <p style={{textDecoration:"underline",color:"rgb(127, 153, 241)"}}>
                    Join as A member to our channel
                    </p>
                </div>
            </div>
        </section>
        <section style={{textAlign:"center"}}>
            <p className='last'>
            © 2024 Polaris-All licensed content <span style={{textDecoration:"underline",color:"rgb(27, 80, 139)"}}>Community</span>
            </p>
        </section>
    </div>
  )
}

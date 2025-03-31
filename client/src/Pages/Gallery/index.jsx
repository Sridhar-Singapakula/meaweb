import React from 'react'
import Navbar from '../../components/Navbar'
import aca from '../../img/images/academic.png'
import chess1 from '../../img/images/chess.jpeg'
import chess2 from '../../img/images/chess1.jpeg'
import chess3 from '../../img/images/chess2.jpeg'
import chess4 from '../../img/images/chess3.jpeg'
import chess5 from '../../img/images/chess4.jpeg'

import esp from '../../img/images/esports.jpeg'

import fb1 from '../../img/images/football.jpeg'
import fb2 from '../../img/images/football1.jpeg'
import fb3 from '../../img/images/football2.jpeg'
import Slider from 'react-slick';
import volley1 from '../../img/images/volley.jpeg'
import volley2 from '../../img/images/volley1.jpeg'
import volley3 from '../../img/images/volley2.jpeg'
import volley4 from '../../img/images/volley3.jpeg'
import p1 from "../../img/images/p1.jpg"
import p2 from "../../img/images/p2.jpg"
import p3 from "../../img/images/p3.jpg"
import p4 from "../../img/images/p4.jpg"
import p5 from "../../img/images/p5.jpg"
import './style.css'

export const Gallery = () => {
  const images=[
    p1,p2,p3,p4,p5
  ]
  const sliderSettings = {
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000, // Set the interval between slides (in milliseconds)
    customPaging: function (i,active) {
      return (
        <div
          style={{
            width: "12px",
            height: "12px",
            border: active ? "2px solid black" : "2px solid white",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>{dots}</ul>
      </div>
    ),
  };
  return (
    <> 
      <div style={{marginTop:"100px",textAlign:"center"}}>
    <Navbar/>
    <h4 className='_h4' style={{marginBottom:"-60px"}}> Gallery</h4>

<div class="gallery">
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>BOARD GAMES</strong></figcaption>
  </figure>

  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>BOARD GAMES</strong> WINNERS</figcaption>
  </figure>

  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>CHESS</strong> </figcaption>
  </figure>

  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>CHESS</strong>  </figcaption>
  </figure>

  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>CHESS</strong></figcaption>
  </figure>

  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption><strong>CHESS</strong>WINNERS</figcaption>
  </figure>

  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption><strong>FOOTBALL</strong></figcaption>
  </figure>
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption><strong>FOOTBALL</strong> </figcaption>
  </figure>
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption><strong>FOOTBALL</strong> </figcaption>
  </figure>
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>VOLLEYBALL</strong></figcaption>
  </figure>
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>VOLLEYBALL</strong> </figcaption>
  </figure>
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption><strong>VOLLEYBALL</strong> </figcaption>
  </figure>
  <figure class="imageRoll">
    <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
      </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
    <figcaption> <strong>VOLLEYBALL</strong> WINNERS</figcaption>
  </figure>
</div>

       
    </div>
    <section className="photo_gallery" data-aos="zoom-in">
      <h4 className="_h4" style={{textAlign:"center", margin:"30px"}}>Events:</h4>
     <Slider {...sliderSettings} style={{textAlign:"center"}}>
      <div>
        <img src={p1} alt="" className="gallery_"></img>
      </div>
      <div>
        <img src={p2} alt="" className="gallery_"></img>
      </div>
      <div>
        <img src={p3} alt="" className="gallery_"></img>
      </div>
      <div>
        <img src={p4} alt="" className="gallery_"></img>
      </div>
      <div>
        <img src={p5} alt="" className="gallery_"></img>
      </div>
     </Slider>
    </section>
    <div id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

	<div className="col-lg-3 col-md-6 footer-contact">
          <h3 style={{color:"#DAC0A3"}}>MEA IIT Bombay<span>.</span></h3>
          <p>
          IIT Bombay<br />
          Maharashtra 400076<br /><br />
            <strong>Phone:</strong> +91 63800 85819 <br />
            <strong>Email:</strong> gsec@me.iitb.ac.in<br />
          </p>
        </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://moodle.iitb.ac.in/login/index.php">Moodle</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://www.cdeep.iitb.ac.in/">CDEEP</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://webmail.iitb.ac.in/?_task=mail&_mbox=INBOX">Webmail</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://portal.iitb.ac.in/asc/Login">External ASC</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://asc.iitb.ac.in/acadmenu/index.jsp">Internal ASC</a></li>
          </ul>
      </div>
    </div>
  </div>
</div>


  <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
      <div className="copyright">
             &copy; created by--Subram & Sridhar | managed by-Lakshaditya <strong><span>MEA IIT Bombay</span></strong>
            </div>

      </div>
     
  </div>
</div>
    </>
  )
}

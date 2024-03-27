import { Link,useHistory} from "react-router-dom";
import me1 from "../../img/images/me1.jpeg"
import me2 from "../../img/images/me2.jpg"
import React from 'react';
import AOS from 'aos';
import Joi from "joi"
import { useEffect,useState } from 'react';
import {useDispatch} from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'remixicon/fonts/remixicon.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import './style.css';
import Ameya from "../../img/images/Ameya.jpg"
import Kush from "../../img/images/Kush.jpeg"
import Rushi from "../../img/images/Rushi.jpeg"
import Rishikesh from "../../img/images/rushikeshjagtap.jpg"
import Mayur from "../../img/images/Mayur Tank.jpg"
import Ajay from "../../img/images/Ajay.jpg"
import Kriti from "../../img/images/Kriti A.jpg"
import Samiksha from "../../img/images/Samiksha.jpg"
import Jenil from "../../img/images/Jenil.jpeg"
import Disha from "../../img/images/Disha.HEIC"
import Sridhar from "../../img/images/SRIDHAR.jpg"
import Subram from "../../img/images/Subram.jpg"
import Manasvi from "../../img/images/Manasvi.jpg"
import Tanmay from "../../img/images/Tanmay.jpg"
import Yash from "../../img/images/YASH.jpeg"

import p1 from "../../img/images/p1.jpg"
import p2 from "../../img/images/p2.jpg"
import p3 from "../../img/images/p3.jpg"
import p4 from "../../img/images/p4.jpg"
import p5 from "../../img/images/p5.jpg"

import Navbar from "../../components/Navbar"


const Main = () => {
	const [errors, setErrors] = useState({});
	const [isFetching, setIsFetching] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const images=[
    p1,p2,p3,p4,p5
  ]
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
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
    useEffect(() => {
      AOS.init({
        duration: 1200,
        });
      }, []);
      

  return (
    <div className="main">
     <Navbar/>

    <section id="hero" className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="col-xl-5">
            <h1>Hello,Welcome!<br/>Mechanical Engineering Association</h1>
            <h2>IIT Bombay</h2>
            <p style={{fontSize:"20px",color:"white",marginTop:"30px",marginBottom:"-50px"}}>Follow Us</p>
            <a href="https://www.instagram.com/mea_iitb/" className="instagram" style={{color:"#c13584"}}>  <i class="bi bi-instagram"> </i> </a>
          </div>
      </div>
    </section>
    <section className="photo_gallery" data-aos="zoom-in">
      <h4 className="_h4" style={{textAlign:"center"}}>Events</h4>
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
          Maharashtra 440010<br /><br />
            <strong>Phone:</strong> +91  77109 63432<br />
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
             &copy; created by--Subram & Sridhar <strong><span>MEA IIT Bombay</span></strong>
            </div>
        </div>
        <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="/" className="twitter"><i class="bi bi-twitter"></i></a>
            <a href="/" className="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/mea_iitb/" className="instagram"><i class="bi bi-instagram"></i></a>
            <a href="/" className="google-plus"><i class="bi bi-skype"></i></a>
            <a href="/" className="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
    </div>
</div>

  <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</div>
  )
}

export default Main
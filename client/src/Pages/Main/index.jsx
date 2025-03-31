import { Link,useHistory} from "react-router-dom";
import me1 from "../../img/images/me1.jpeg"
import me2 from "../../img/images/me2.jpg"
import mechanza from "../../img/images/mechanza.jpg";
import hand from "../../img/images/hand.jpg";
import oreo from "../../img/images/oreo.jpg";
import badminton from "../../img/images/badminton.jpg";

import React from 'react';
import AOS from 'aos';
import Joi from "joi"
import { useRef, useEffect,useState } from 'react';
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
    const sliderListRef = useRef(null);
    const thumbnailRef = useRef(null);
    const [animationClass, setAnimationClass] = useState('');

    const moveSlider = (direction) => {
        const sliderList = sliderListRef.current;
        const thumbnail = thumbnailRef.current;
        const sliderItems = Array.from(sliderList.children);
        const thumbnailItems = Array.from(thumbnail.children);

        if (direction === 'next') {
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            setAnimationClass('next');
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
            setAnimationClass('prev');
        }

        // Reset the animation class after the animation ends
        sliderList.addEventListener(
            'animationend',
            () => setAnimationClass(''),
            { once: true }
        );
    };
    useEffect(() => {
      const interval = setInterval(() => {
          moveSlider('next'); 
      }, 5000); 

      return () => clearInterval(interval); 
  }, []); 
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
    
      const counters = document.querySelectorAll(".stat-number");
      const totalDuration = 1000; 
      const interval = 10; 
    
      const animateCounters = (entry) => {
        const counter = entry.target;
        const target = counter.getAttribute("data-target");
        const sign = counter.getAttribute("data-sign") || ""; 
        const steps = totalDuration / interval; 
        const increment = target / steps;
    
        let count = 0;
        const updateCounter = () => {
          count += increment;
    
          if (count < target) {
            counter.innerText = `${Math.ceil(count)}${sign}`; // Add the sign
            setTimeout(updateCounter, interval);
          } else {
            counter.innerText = `${target}${sign}`; // Ensure the final value matches the target
          }
        };
    
        updateCounter(); // Start the animation
      };
    
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters(entry); // Trigger the counter animation
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      };
    
      const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    
      counters.forEach((counter) => observer.observe(counter));
    }, []);
    
    
    
      

  return (
    <div className="main">
     <Navbar/>
    {/* <section className="image-slider">
    <div className={`slider ${animationClass}`}>
            <div className="list" ref={sliderListRef}>
                {[mechanza,oreo,badminton,hand].map((src, index) => (
                    <div className="item" key={index}>
                        <img src={src} alt="" />
                        <div className="content">
                            <div className="title">MAGIC SLIDER</div>
                            <div className="type">Type {index + 1}</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="button">
                            <p style={{fontSize:"20px",color:"white",marginTop:"30px",marginBottom:"-50px"}}>Follow Us</p>
            <button href="https://www.instagram.com/mea_iitb/" className="instagram" style={{color:"#c13584"}}>  <i class="bi bi-instagram"></i> </button>
            <button href="https://youtube.com/@meaiitbombay?si=598O6mEUT0n6QOju" className="instagram" style={{color:"#FF0000"}}>  <i class="bi bi-youtube"></i> </button>
            <button href="https://www.linkedin.com/company/mea-iit-bombay-linked/" className="instagram" style={{color:"#0A66C2"}}>  <i class="bi bi-linkedin"></i> </button>
          
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail" ref={thumbnailRef}>
                {[oreo,badminton,hand,mechanza].map((src, index) => (
                    <div className="item" key={index}>
                        <img src={src} alt="" />
                    </div>
                ))}
            </div>

            <div className="nextPrevArrows">
                <button className="prev" onClick={() => moveSlider('prev')}>
                    &lt;
                </button>
                <button className="next" onClick={() => moveSlider('next')}>
                    &gt;
                </button>
            </div>
        </div>
    

    
</section> */}

    <section id="hero" className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="col-xl-5">
            <h1>Hello,Welcome!<br/>Mechanical Engineering Association</h1>
            <h2>IIT Bombay</h2>
            <p style={{fontSize:"20px",color:"white",marginTop:"30px",marginBottom:"-50px"}}>Follow Us</p>
            <a href="https://www.instagram.com/mea_iitb/" className="instagram" style={{color:"#c13584"}}>  <i class="bi bi-instagram"></i> </a>
            <a href="https://youtube.com/@meaiitbombay?si=598O6mEUT0n6QOju" className="instagram" style={{color:"#FF0000"}}>  <i class="bi bi-youtube"></i> </a>
            <a href="https://www.linkedin.com/company/mea-iit-bombay-linked/" className="instagram" style={{color:"#0A66C2"}}>  <i class="bi bi-linkedin"></i> </a>
          </div>
      </div>
    </section>
    <section id="who-we-are" className="who-we-are-section">
  <div className="container" data-aos="fade-up" data-aos-duration="1200">
    <div className="box-container">
      <div className="section-header">
        <h2>What is MEA?
        </h2>
        <p>
        The Mechanical Engineering Association (MEA) is the bridge that brings the entire Mechanical family together—students, faculty, and alumni. We connect dreams with guidance, doubts with solutions, and opportunities with the people who deserve them, creating a bond that inspires growth and happiness.

        </p>
      </div>
      <div className="content-boxes">
        <div className="box" data-aos="flip-left" data-aos-delay="100">
          <h3> Values</h3>
          <p>
          At MEA, we value care, connection, and celebration. We are the bridge that turns fear into confidence, hesitation into action, and effort into achievement, all while building a community where everyone feels at home.

          </p>
        </div>
        <div className="box" data-aos="flip-right" data-aos-delay="200">
          <h3>Mission
          </h3>
          <p>
          Our mission is to be the bridge that guides students through every challenge—be it academics, career worries, or life in Mechanical. We connect them to professors, alumni, and opportunities while hosting moments of joy and laughter to keep spirits high and minds refreshed
          </p>
        </div>
        <div className="box" data-aos="zoom-in" data-aos-delay="300">
          <h3>Vision</h3>
          <p>
          To create a family where no one feels left behind, where every doubt is met with guidance and every dream is met with opportunity. MEA is the bridge to a thriving, united Mechanical Engineering community where “Mech Machata Hai” becomes a legacy we all proudly carry forward.
          </p>
        </div>
      </div>
    </div>
    
  </div>
  <section className="statistics-section">
  <div className="container">
    <div className="stats-boxes">
      <div className="stat-box">
        <h3 className="stat-number" data-target="1400" data-sign="+"></h3>
        <p>Students</p>
      </div>
      <div className="stat-box">
        <h3 className="stat-number" data-target="60"></h3>
        <p>Faculty</p>
      </div>
      <div className="stat-box">
        <h3 className="stat-number" data-target="57"></h3>
        <p>Global Department Rank</p>
      </div>
      <div className="stat-box">
        <h3 className="stat-number" data-target="1"></h3>
        <p>MEA</p>
      </div>
    </div>
  </div>
    </section>
    </section>
    

    <section className="photo_gallery" data-aos="zoom-in">
      <h4 className="_h4" style={{textAlign:"center",marginTop:"50px"}}>Events</h4>
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
            <strong>Phone:</strong> +91  63800 85819<br />
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

  <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</div>
  )
}

export default Main
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


const Main = () => {

	const [errors, setErrors] = useState({});
	const [isFetching, setIsFetching] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    const sliderSettings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000, // Set the interval between slides (in milliseconds)
      };
    useEffect(() => {
        AOS.init();
        
      }, []);

  return (
    <div className="main">
       <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        
        <Link to="/"><a href="/" className="logo me-auto"><img src="data:image/png;base64,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" alt="" /></a></Link>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
          <ul>
            <li><a className="nav-link scrollto active" href="/">Home</a></li>
            <li><a className="nav-link scrollto" href="#AboutUs">Gallery</a></li>
            <li><a className="nav-link scrollto" href="#services">Publications</a></li>
            <li><a className="nav-link scrollto" href="#counts">Council</a></li>
            <li><a className="nav-link scrollto" href="#tabs">Resources</a></li>
            <li><a href="#faq">News&Events</a></li>
            <li className="dropdown">
              <a href="#portfolio">
                <span>Blogs</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="/">Drop Down 1</a></li>
                <li className="dropdown">
                  <a href="/">
                    <span>Deep Drop Down</span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li><a href="/">Deep Drop Down 1</a></li>
                    <li><a href="/">Deep Drop Down 2</a></li>
                    <li><a href="/">Deep Drop Down 3</a></li>
                    <li><a href="/">Deep Drop Down 4</a></li>
                    <li><a href="/">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="/">Drop Down 2</a></li>
                <li><a href="/">Drop Down 3</a></li>
                <li><a href="/">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileNavToggle}></i>
        </nav>
      </div>
    </header>


    <section id="hero" className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <div className="row">
          <div className="col-xl-7">
            <h1 style={{width:"1500px"}}>Hello,Welcome!<br/>"MECHANICAL ENGINEERING ASSOCIATION" </h1>
            <h4 style={{fontSize:"50px",fontWeight:"600",color:"white"}}>IIT Bombay</h4>
            <Link  className="btn-get-started">More About Us</Link>
            <Link  className="btn-buy">Play Video</Link>
          </div>
        </div>
      </div>
    </section>

  <div id="main">

    
  <section id="testimonials" className="testimonials" style={{backgroundColor:"#1b1b1b"}}>
  <div className="container" data-aos="fade-up">
   

    <Slider {...sliderSettings} dots={true}>
      <div className="testimonial-item">
        <img src={me1}className="Headimages" alt="" />
        <h3>Events Conducted</h3>
        <h4>IIT BOmbay ,Powai </h4>
        <p style={{fontSize:"14px"}}>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          "Lorem eiencieffwijciweinwinvn 2ebfen 24fnfi24nfih  i24nfu2hi  2u4bfou2  3ubou3"
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        
        
      </div>
      <div className="testimonial-item">
        <img src={me2} className="Headimages" alt="" />
        <h3>Events Conducted</h3>
        <h4>IIT BOmbay ,Powai </h4>
        <p style={{fontSize:"14px"}}>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          "Lorem eiencieffwijciweinwinvn 2ebfen 24fnfi24nfih  i24nfu2hi  2u4bfou2  3ubou3"
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        
        
      </div>

      
    </Slider>
  </div>
</section>

    <section id="AboutUs" className="about section-bg">
        <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
                <div className="content">
                <h3>MEA IIT Bombay</h3>
                <p style={{fontSize:"14px"}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti corporis ad a? Dolor, sint consectetur omnis minus maxime natus nobis adipisci reprehenderit unde, qui, accusantium molestiae doloribus! Ex, ipsum!</p>
                <a href="/" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a>
                </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i class="bi bi-bookmark-check-fill" style={{color:"green"}}></i>
                    <h4>Vision and Mission</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magnam dolor, incidunt aliquam expedita non aperiam maiores voluptatem quisquam.  </p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i class="bi bi-diagram-3-fill" style={{color:"lightblue"}}></i>
                    <h4>Our Team</h4>
                    <p>Dhruv pathology has a team of highly qualified and competent professionals that are headed by an experienced management. </p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i class="bi bi-list-check" style={{color:"yellow"}}></i>
                    <h4>Events</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perferendis reprehenderit, illum nulla est dolores iste possimus </p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <i class="bi bi-reception-4"></i>
                    <h4>Publications</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic animi excepturi quam laborum eligendi officia inventore ab fs vel..</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

       
    
    <section id="portfolio" className="portfolio" style={{backgroundColor:"#1b1b1b"}}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Gallery</h2>
          <p>Explore our diagnostic gallery and witness the power of advanced imaging technology in action.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
            
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={me2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Molecularbiology</h4>
                <p>Dept</p>
                <div className="portfolio-links">
                  <a href="/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="/" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={me2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Biochemistry</h4>
                <p>Dept</p>
                <div className="portfolio-links">
                  <a href="/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="/" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

         
          

        </div>
       

      </div>
      
      
    </section>
    


    <section id="team" className="team section-bg" >
      <div className="container" data-aos="fade-up" style={{ 
    
  }}>

        <div className="section-title">
          <h2>Team</h2>
          <p style={{fontSize:"13px"}}>Our dynamic, highly-skilled and enthusiastic team, work really hard to maintain excellence in the services we deliver. We are a highly motivated team, focused on ensuring that every engagement meets the needs of our patients.</p>
        </div>

        <div className="row">

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Ameya} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Ameya Halarnkar</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Department General Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Kush} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Kush Patil</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Chief Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Rushi} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Rushi Modhave</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>PG Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Rishikesh} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Rushikesh Jagtap</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>PG Sports Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Mayur} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Mayur Tank</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Cultural Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Ajay} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Ajay Raj Mishra</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Associate Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Ameya} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Siddhant Jebale</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Associate Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Kriti} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Kriti Talreja</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Academic Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Samiksha} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Samiksha Patel</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>MEME Chief Editor</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Jenil} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Jenil Dayma</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>MEME Chief Editor</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Disha} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Disha Pandey</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>MEME Chief Editor</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Sridhar} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Sridhar Singapakula</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Web Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Subram} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Subram Das</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Web Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Manasvi} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Manasvi Kushwaha</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Sports Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Tanmay} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Tanmay Kulkarni</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Design Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Yash} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Yash Gupta</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Design Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Ameya} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Sharvari Dhote</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>Media Secretary</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Ameya} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Dhriti Maniar</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>MEME Junior Editor</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" style={{ backgroundColor: "rgba(17, 25, 40, 0.25)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.125)", padding: "38px", filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="member-img">
              <img src={Ameya} style={{ objectFit: "cover", width: "200px", height: "200px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.255)" }} alt="" />
              <div className="social">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4 style={{ fontFamily: "'Righteous', sans-serif", color: "rgba(255, 255, 255, 0.98)", textTransform: "uppercase", fontSize: "2.4rem" }}>Parul Diwan</h4>
              <span style={{ color: "#fff", fontFamily: "'Lato', sans-serif", textAlign: "center", fontSize: "0.8rem", lineHeight: "150%", letterSpacing: "2px", textTransform: "uppercase" }}>MEME Juniour Editor</span>
            </div>
          </div>
        </div>         

        </div>

      </div>
    </section>
    
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Have a Question? Contact Us</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                <i class="bi bi-geo-alt"></i>
                  <h3>Our Address</h3>
                  <p> IIT Bombay, Maharashtra 440010</p>
                
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                <i class="bi bi-envelope-at"></i>
                  <h3>Email Us</h3>
                  <p>snds@gmail.com<br/>iitb@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                <i class="bi bi-telephone-forward"></i>
                  <h3>Call Us</h3>
                  <p>+91 712-2461355<br/>+91 9011284114</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
          </div>

        </div>

      </div>
    </section>

  </div>
  <div id="footer">

  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6 footer-contact">
          <h3>MEA IIT Bombay<span>.</span></h3>
          <p>
          IIT Bombay<br />
          Maharashtra 440010<br /><br />
            <strong>Phone:</strong> +91 712-2461355<br />
            <strong>Email:</strong> info@gmail.com<br />
          </p>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
          </ul>
        </div>


        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Join Our Newsletter</h4>
          <p>Don't worry we don not spam your inbox.</p>
          <form action="" method="post">
            <input type="email" name="email" /><input type="submit" value="Subscribe" />
          </form>
        </div>

      </div>
    </div>
  </div>


    <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
             &copy; Copyright <strong><span>MEA IIT Bombay</span></strong>. All Rights Reserved
            </div>
        </div>
        <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="/" className="twitter"><i class="bi bi-twitter"></i></a>
            <a href="/" className="facebook"><i class="bi bi-facebook"></i></a>
            <a href="/" className="instagram"><i class="bi bi-instagram"></i></a>
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
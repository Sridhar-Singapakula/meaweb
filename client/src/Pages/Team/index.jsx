import React from 'react'
import "./style.css"
import { useEffect,useState } from 'react';
import AOS from 'aos';
import Navbar from '../../components/Navbar'
import Ameya from "../../img/images/Ameya.jpg"
import Kush from "../../img/images/Kush.jpeg"
import Rushi from "../../img/images/Rushi.jpeg"
import Rishikesh from "../../img/images/rushikeshjagtap.jpg"
import Mayur from "../../img/images/Mayur Tank.jpg"
import Ajay from "../../img/images/Ajay.jpg"
import Kriti from "../../img/images/Kriti A.jpg"
import Samiksha from "../../img/images/Samiksha.jpg"
import Jenil from "../../img/images/Jenil.jpeg"
import Disha from "../../img/images/disha.jfif"
import Sridhar from "../../img/images/SRIDHAR.jpg"
import Subram from "../../img/images/Subram.jpg"
import Manasvi from "../../img/images/Manasvi.jpg"
import Tanmay from "../../img/images/Tanmay.jpg"
import Yash from "../../img/images/YASH.jpeg"
import Siddhant from "../../img/images/Siddhant.jfif"
import Sharvari from "../../img/images/Sharvari.jpg"
import Dhriti from "../../img/images/Dhriti.jpeg"
import Parul from "../../img/images/Parul.jpg"

const Team = () => {
	useEffect(() => {
        AOS.init({
			duration: 1200,
		  });
		
      }, []);
  return (
    <div>
        <Navbar/>
        <h3 className='_h4' style={{marginTop:"80px",textAlign:"center",marginBottom:"-150px"}}>Our Team<span>.</span></h3>
       
			<div className='team_head' style={{marginTop:"150px"}}>
				<div className='team_' data-aos="zoom-in">
					<img src={Ameya}></img>
					<h2>Ameya</h2>
					<p>Dept General Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Kush}></img>
					<h2>Kush Patil </h2>
					<p>Chief Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Rushi}></img>
					<h2>Rushi Modhave</h2>
					<p>PG Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Rishikesh}></img>
					<h2>Rushikesh Jagtap</h2>
					<p>PG Sports Secretary</p>
				</div>
			</div>
			<div className='team_head'>
				<div className='team_' data-aos="zoom-in">
					<img src={Mayur}></img>
					<h2>Mayur Tank</h2>
					<p>Cultural Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Siddhant}></img>
					<h2>Siddhant Jebale </h2>
					<p>Associate Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Kriti}></img>
					<h2>Kriti A</h2>
					<p>Academic Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Samiksha}></img>
					<h2>Samiksha Patel</h2>
					<p>MEME Chief Editor</p>
				</div>
			</div>
			<div className='team_head'>
				<div className='team_' data-aos="zoom-in">
					<img src={Jenil}></img>
					<h2>Jenil Dayma</h2>
					<p>MEME Chief Editor</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Disha}></img>
					<h2>Disha Pandey </h2>
					<p>MEME Chief Editor</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Sridhar}></img>
					<h2>Sridhar Singapakula</h2>
					<p>Web Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Subram}></img>
					<h2>Subram Das</h2>
					<p>Web Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Manasvi}></img>
					<h2>Manasvi Kushwaha</h2>
					<p>Sports Secretary</p>
				</div>
			</div>
			<div className='team_head'>
				<div className='team_' data-aos="zoom-in">
					<img src={Tanmay}></img>
					<h2>Tanmay Kulkarni</h2>
					<p>Design Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Yash}></img>
					<h2>Yash Gupta </h2>
					<p>Design Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Sharvari}></img>
					<h2>Sharvari Dhote</h2>
					<p>Media Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Dhriti}></img>
					<h2>Dhriti Maniar</h2>
					<p>MEME Junior Editor</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Parul}></img>
					<h2>Parul Diwan</h2>
					<p>MEME Juniour Editor</p>
				</div>
			</div>

<div id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3 style={{color:"#DAC0A3"}}>MEA IIT Bombay<span>.</span></h3>
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
          <li><i className="bx bx-chevron-right"></i> <a href="/">Moodle</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">CDEEP</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">Webmail</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">External ASC</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">Internal ASC</a></li>
        </ul>
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
    </div>
  )
}

export default Team
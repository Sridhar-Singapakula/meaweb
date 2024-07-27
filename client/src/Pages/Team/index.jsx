import React from 'react'
import "./style.css"
import { useEffect,useState } from 'react';
import AOS from 'aos';
import Navbar from '../../components/Navbar'

import Adrika from "../../img/images/adrika.jpeg"
import Kaavya from "../../img/images/kaavya.jpg"
import Vaibhav from "../../img/images/vaibhav.jpg"
import Dhriti from "../../img/images/dhriti.HEIC"
import Khushi from "../../img/images/khushi.jpg"
import Aditya from "../../img/images/aditya.jpg"
import Lakshaditya from "../../img/images/lakshaditya.jpg"
import Kunsh from "../../img/images/kunsh.jpg"
import Kriti from "../../img/images/kriti.jpg"
import Devasish from "../../img/images/devasish.jpg"
import Sumit from "../../img/images/sumit.jpg"
import Harish from "../../img/images/harish.png"
import Lovepreet from "../../img/images/lovepreet.jpg"
import Suryansh from "../../img/images/suryansh.jpg"
import Bhushan from "../../img/images/bhushan.JPG"
import Tanmay from "../../img/images/tanmay1.jpg"
import Meghraj from "../../img/images/meghraj.jpg"
import Vinay from "../../img/images/vinay.jpeg"
import Videh from "../../img/images/videh.jpg"
import Rishik from "../../img/images/rishik.png"
import Keshav from "../../img/images/keshav.JPG"
import Manish from "../../img/images/manish.jpg"
import Pratham from "../../img/images/pratham.jpg"


import t1 from "../../img/images/t1.jpeg"

const Team = () => {
	useEffect(() => {
        AOS.init({
			duration: 1200,
		  });
		
      }, []);
  return (
    <div>
        <Navbar/>
        <h3 className='_h4' style={{marginTop:"80px",textAlign:"center",marginBottom:"-150px"}}>Our Team<span>:</span></h3>
       
			<div className='team_head' style={{marginTop:"150px"}}>
				<div className='team_' data-aos="zoom-in">
					<img src={Kriti}></img>
					<h2>Kriti</h2>
					<p>Dept General Secretary</p>
				</div>
			</div>
			<div className='team_head' >
				<div className='team_'  data-aos="zoom-in" >
					<img src={Lovepreet}></img>
					<h2>Lovepreet Singh</h2>
					<p>PG Secretary</p>
				</div>
				
			</div>
			<div className='team_head'>
				<div className='team_' data-aos="zoom-in">
					<img src={Bhushan}></img>
					<h2>Bhushan Khandare</h2>
					<p>Chief Secretary of Events and Execution</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Tanmay}></img>
					<h2>Tanmay Kulkarni</h2>
					<p>Chief Secretary of Academic Affairs</p>
				</div>
				
				<div className='team_' data-aos="zoom-in">
					<img src={Vinay}></img>
					<h2>Vinay Kumar Tiwari</h2>
					<p>Department Coordinator</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Meghraj}></img>
					<h2>Meghraj Prajapat</h2>
					<p>AURAA(PGAC)</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Harish}></img>
					<h2>Harishkumar Gajakosh</h2>
					<p>PG Cultural Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Sumit}></img>
					<h2>Sumit Anand</h2>
					<p>PG Sports Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Manish}></img>
					<h2>Manish Kumar</h2>
					<p>PhD Representative</p>
				</div>
			</div>
			<div className='team_head'>
				<div className='team_' data-aos="zoom-in">
					<img src={Aditya}></img>
					<h2>Aditya Udeniya</h2>
					<p>UG Sports Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Adrika}></img>
					<h2>Adrika Das </h2>
					<p>Design Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Devasish}></img>
					<h2>Devasish Behera</h2>
					<p>Media Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Dhriti}></img>
					<h2>Dhriti Singh</h2>
					<p>Senior Editor</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Kaavya}></img>
					<h2> Kaavya Vasu</h2>
					<p>2nd Year CR</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Keshav}></img>
					<h2>Keshav Goyal</h2>
					<p>Associate Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Khushi}></img>
					<h2>Khushi Sharma </h2>
					<p>Second Year CR</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Kunsh}></img>
					<h2>Kunsh Nyati</h2>
					<p>2nd Year CR</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Lakshaditya}></img>
					<h2>Lakshaditya Singh</h2>
					<p>Web Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Rishik}></img>
					<h2> Rishik Yadav</h2>
					<p>Alumni Secretary</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Vaibhav}></img>
					<h2> Vaibhav Patil</h2>
					<p>Associate Secretary</p>
				</div>				
			</div>
			
			<div className='team_head'>
				
				<div className='team_' data-aos="zoom-in">
					<img src={Pratham}></img>
					<h2>Pratham Srivastava</h2>
					<p>4th Year CR</p>
				</div>
				<div className='team_' data-aos="zoom-in">
					<img src={Suryansh}></img>
					<h2>Suryansh Lunkar</h2>
					<p>4th Year CR</p>
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
            <strong>Phone:</strong> +91  77109 63432<br />
            <strong>Email:</strong> gsec@me.iitb.ac.in<br />
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
             &copy; created by--Subram & Sridhar <strong><span>MEA IIT Bombay</span></strong>
            </div>
      </div>
     
  </div>
</div>
    </div>
  )
}

export default Team
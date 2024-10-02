import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css';
import magjpg from '../../assets/images/Magazine -1_page-0001.jpg'
import newsjpg from '../../assets/images/newsletter-1_page-0001.jpg'

const MagazinePage = () => {

  return (

  <section style={{marginBottom:"100px",marginTop:"-50px"}}>
    <h4 className="_h4" style={{textAlign:"center"}}>Editorial</h4>
    <h6 style={{textAlign:"center",fontSize:"15px",color:"white"}}> Freshmen Introductory Booklet 24-25</h6>

    <div className="_editorial">
    
    <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        style={{  width: "800px", height: "600px" }}
        src="/freshmenbooklet.html"  // Correct path
        title="Flip Book Viewer"
    ></iframe>
      
    </div>
    <h6 style={{textAlign:"center",fontSize:"15px",color:"white"}}>Mechanical Department Handbook</h6>

    <div className="_editorial">
    
    <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        style={{  width: "800px", height: "600px" }}
        src="/departmentbooklet.html"  // Correct path
        title="Flip Book Viewer"
    ></iframe>
      
    </div>
    </section>
  );
};


export const Editorial = () => {
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
        <Navbar/>
        <div className="container">
            <MagazinePage />
        </div>
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
    &copy; created by--Subram & Sridhar | managed by--Lakshaditya <strong><span>MEA IIT Bombay</span></strong>
    </div>
      </div>
     
  </div>
</div>
    </div>
  )
}

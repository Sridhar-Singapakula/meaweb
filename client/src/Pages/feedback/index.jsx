import React from 'react'
import Navbar from '../../components/Navbar'

const Feedback = () => {
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
        <Navbar/>
        <h3 className='_h4'>Feedback Form<span>.</span></h3>
        <iframe src="https://docs.google.com/forms/d/1rONLsTIF4Adh_lj4tCapBKhJ4OQ-TRHNPB9EZzjJheA/edit?chromeless=1" width="640" height="605" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
           &copy; Copyright <strong><span>MEA IIT Bombay</span></strong>. All Rights Reserved
          </div>
      </div>
      
  </div>
</div>
    </div>
  )
}

export default Feedback
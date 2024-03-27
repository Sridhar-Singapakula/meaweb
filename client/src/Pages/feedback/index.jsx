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

export default Feedback
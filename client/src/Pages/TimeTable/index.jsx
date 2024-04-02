import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import "./style.css"
import SEM1 from './SEM1'
import SEM2 from './SEM2'
import SEM5 from './SEM5'
import SEM4 from './SEM4'
import SEM3 from './SEM3'
import SEM6 from './SEM6'

const Timetable = () => {

    const [currentPage, setCurrentPage] = useState(null)

    const handleClick = (page) =>{
        setCurrentPage(page);
    }

    return (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
            <Navbar />
            {/* <h3 className='_h4'>TIME - TABLE</h3> */}

            <div className='timetablebutton'>
                <button class='glowing-btn'><span class='glowing-txt'>TI<span class='faulty-letter'>ME</span> - TABLE</span></button>
            </div>

            <div class="buttoncontainer">
                <div class="btn" onClick={()=> handleClick(<SEM1/>)}><a href="#">SEM 1</a></div>
                <div class="btn" onClick={()=> handleClick(<SEM2/>)}><a href="#" >SEM 2</a></div>
                <div class="btn" onClick={()=> handleClick(<SEM3/>)}><a href="#" >SEM 3</a></div>
                <div class="btn" onClick={()=> handleClick(<SEM4/>)}><a href="#">SEM 4</a></div>
                <div class="btn" onClick={()=> handleClick(<SEM5/>)}><a href="#" >SEM 5</a></div>
                <div class="btn" onClick={()=> handleClick(<SEM6/>)}><a href="#" >SEM 6</a></div>
            </div>		

            {currentPage}
            

            <div id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3 style={{ color: "#DAC0A3" }}>MEA IIT Bombay<span>.</span></h3>

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

export default Timetable

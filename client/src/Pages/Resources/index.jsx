import React from 'react'
import Navbar from '../../components/Navbar';
import folder from "../../img/images/folder.svg"
import "./style.css";


const Resources = () => {
    
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
        <Navbar/>
        <h3 className='_h4'>Resources</h3>
        <div className='imp_docs'>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FElectives%20%26%20Minor%20Courses">
                <img src={folder} className='img_'></img>
                <h4>Electives & Minor Courses</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FMech%20DICs">
                <img src={folder} className='img_'></img>
                <h4>Mech DICs</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FMech%5F3rd%2Dsem%282019%2D23%29">
                <img src={folder} className='img_'></img>
                <h4>Mech_3rd_sem(21-23)</h4>
                </a>
            </div>
            
        </div>
        <div className='imp_docs'>
        <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FMech%5F4th%2Dsem%282019%2D23%29">
                <img src={folder} className='img_'></img>
                <h4>Mech_4th_sem(21-23)</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FMech%5F5th%2Dsem%282020%2D23%29">
                <img src={folder} className='img_'></img>
                <h4>Mech_5th_sem(21-23)</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FMech%5F6th%2Dsem%282020%2D23%29">
                <img src={folder} className='img_'></img>
                <h4>Mech_6th_sem(21-23)</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FAcademic%20Resources%2FMech%5F7th%2Dsem%282021%2D23%29">
                <img src={folder} className='img_'></img>
                <h4>Mech_7th_sem(21-23)</h4>
                </a>
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

export default Resources
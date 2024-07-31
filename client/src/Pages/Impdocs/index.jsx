import React from 'react'
import Navbar from '../../components/Navbar';
import pdf from "../../img/images/pdf.png";
import academic from "../../img/images/academic.png";
import iitb from "../../img/images/iitb.png";
import excel from "../../img/images/excel.svg";
import vpn from "../../img/images/vpn.jfif"
import "./style.css";


const impDocs = () => {
    
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
        <Navbar/>
        <h3 className='_h4'>Important Documents</h3>
        <div className='imp_docs'>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FAcademic%20Calendar%202023%2D24%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={academic} className='img_'></img>
                <h4>Academic Calender 2023-24</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FASC%2C%20Moodle%2C%20Webmail%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={iitb} className='img_' ></img>
                <h4>ASC,Moodle,Webmail</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FBTech%5FCurriculum%20%28Until%202021%20Batch%29%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>Mech B.Tech Curriculum(until 2021) PDF</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FBTP%20%26%20DDP%20Instructions%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>BTP & DDP instructions PDF</h4>
                </a>
            </div>
        </div>
        <div className='imp_docs'>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FDD%5FCurriculum%20%28until%202021%20Batch%29%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={academic} className='img_'></img>
                <h4>DD Curriculum(untill 2021)</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/:x:/r/personal/190100088_iitb_ac_in/_layouts/15/Doc.aspx?sourcedoc=%7B9DD00841-BB74-4CD8-AA57-290C4465A973%7D&file=DD_Electives%20list.xlsx&action=default&mobileredirect=true">
                <img src={excel} className='img_' ></img>
                <h4>DD Electiives List</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FElectives%20Policy%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>Electives Policy</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FETDGuidelines%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>ETD Guidelines</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FGrading%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>Grading</h4>
                </a>
            </div>
        </div>
        <div className='imp_docs'>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FIITBADV%2Eovpn&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={vpn} className='img_'></img>
                <h4>IITB VPN</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/:x:/r/personal/190100088_iitb_ac_in/_layouts/15/Doc.aspx?sourcedoc=%7B9DD00841-BB74-4CD8-AA57-290C4465A973%7D&file=DD_Electives%20list.xlsx&action=default&mobileredirect=true">
                <img src={pdf} className='img_' ></img>
                <h4>Information about URA</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FSlot%20Timetable%2Ejpg&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>Slot TimeTable</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2FStudent%20Application%20Form%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>Student Application form</h4>
                </a>
            </div>
            <div className='docs_'>
                <a target="_blank" href="https://iitbacin-my.sharepoint.com/personal/190100088_iitb_ac_in/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents%2Fugrulebook%20%282%29%2Epdf&parent=%2Fpersonal%2F190100088%5Fiitb%5Fac%5Fin%2FDocuments%2FMaster%5FDrive%5FPB%2FImportant%20Documents">
                <img src={pdf} className='img_'></img>
                <h4>UG Rulebook</h4>
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
             &copy; created by--Subram & Sridhar <strong><span>MEA IIT Bombay</span></strong>
            </div>

      </div>
      
  </div>
</div>
    </div>
  )
}

export default impDocs
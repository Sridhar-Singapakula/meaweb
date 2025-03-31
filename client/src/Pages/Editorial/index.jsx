import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css';
import magjpg from '../../assets/images/Magazine -1_page-0001.jpg'
import newsjpg from '../../assets/images/newsletter-1_page-0001.jpg'

const MagazinePage = () => {

  return (

  <section style={{marginBottom:"100px",marginTop:"-50px"}}>
    <h4 className="_h4" style={{textAlign:"center"}}>Editorial</h4>

    <h6 style={{textAlign:"center",fontSize:"15px",color:"white"}}>Mechanical Department Newsletter</h6>

    <div className="_editorial">
    
    <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        style={{  width: "800px", height: "600px" }}
        src="/newsletter.html"  
        title="Flip Book Viewer"
    ></iframe>
      
    </div>
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
        
    </div>
  )
}

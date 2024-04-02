import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css';
import magjpg from '../../assets/images/Magazine -1_page-0001.jpg'
import newsjpg from '../../assets/images/newsletter-1_page-0001.jpg'

const MagazinePage = () => {

  const magazinePdfUrl = 'https://drive.google.com/file/d/1desQ3-9HsoT0_tD6EmCf_bmMcqKITXLd/view?usp=drivesdk';

  return (
    <div className="section">
      <h2>Magazine</h2>
      <a href={magazinePdfUrl} target="_blank" rel="noopener noreferrer">
        <img src={magjpg} alt="Magazine Thumbnail" />
      </a>
    </div>
  );
};

const NewsletterPage = () => {
  // Replace 'newsletter.pdf' with the actual URL/path of your newsletter PDF file
  const newsletterPdfUrl = 'https://drive.google.com/file/d/1dYTYud033KYNElQJtVqzbsp9VQYNlXJi/view?usp=drivesdk';

  return (
    <div className="section">
      <h2>Newsletter</h2>
      <a href={newsletterPdfUrl} target="_blank" rel="noopener noreferrer">
        <img src={newsjpg} alt="Newsletter Thumbnail" />
      </a>
    </div>
  );
};

export const Editorial = () => {
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
        <Navbar/>
        <div className="container">
            <MagazinePage />
            <NewsletterPage />
        </div>
        
    </div>
  )
}

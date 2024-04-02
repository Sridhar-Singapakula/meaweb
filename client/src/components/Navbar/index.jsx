import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import AOS from 'aos';
import { useEffect,useState } from 'react';
import logo from "../../img/images/logo.png"
import "./style.css";



const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    console.log(isMobileNavOpen);
    const handleNavLinkClick = () => {
      setIsMobileNavOpen(false);
    };
    const sliderSettings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000, // Set the interval between slides (in milliseconds)
      };
      useEffect(() => {
        AOS.init();
        
      }, []);

	return (
	<header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" style={{ display: "flex" }}>
          <div>
          <a href="/" className="logo me-auto">
            <img src={logo} alt="" />
          </a>
          </div>         
        </Link>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
          
          <ul>
            <li onClick={handleNavLinkClick}><Link to="/"><a className="nav-link scrollto active" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Home</a></Link></li>

            <li onClick={handleNavLinkClick}><Link to="/resources"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Resources</a></Link></li>
           
            <li onClick={handleNavLinkClick}> <Link to="/imp-docs"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>IMP-DOCS</a></Link></li>
            <li onClick={handleNavLinkClick}> <Link to="/timetable"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Time-Table</a></Link></li>
            <li onClick={handleNavLinkClick}> <Link to="/confession"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Confession</a></Link></li>
            <li onClick={handleNavLinkClick}> <Link to="/feedback"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Feedback</a></Link></li>
            <li onClick={handleNavLinkClick} >
            <Link to="/team"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Team</a></Link>
            </li>
            <li onClick={handleNavLinkClick}> <Link to="/gallery"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>Gallery</a></Link></li>
            <li onClick={handleNavLinkClick} className="damp"><a className="nav-link scrollto" href="https://mechdampiitb.github.io/" style={{ fontFamily: "'Rubik Scribble', system-ui" , fontWeight:'900', fontSize:'1.7rem'}}>DAMP</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileNavToggle} ></i>
        </nav>
      </div>
    </header>
	);
};

export default Navbar;

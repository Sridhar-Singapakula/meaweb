import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import AOS from 'aos';
import { useEffect,useState } from 'react';
import {  NavLink } from "react-router-dom";

import logo from "../../img/images/logo.png"
import "./style.css";



const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    console.log(isMobileNavOpen);
    const handleNavLinkClick = () => {
      setIsMobileNavOpen(false);
    };
  

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
            <li onClick={handleNavLinkClick}><NavLink to="/"><a className="nav-link scrollto active" href="" style={{ fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}>Home</a></NavLink></li>

            <li onClick={handleNavLinkClick}><NavLink to="/resources"><a className="nav-link scrollto" href="" style={{fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}>Resources</a></NavLink></li>
            <li onClick={handleNavLinkClick}><NavLink to="/editorial"><a className="nav-link scrollto" href="" style={{fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}>Editorial</a></NavLink></li>
           
            <li onClick={handleNavLinkClick}> <NavLink to="/imp-docs"><a className="nav-link scrollto" href="" style={{fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}> Docs</a></NavLink></li>
            
            <li onClick={handleNavLinkClick} ><NavLink to="/team"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}>Team</a></NavLink>
            </li>
            <li onClick={handleNavLinkClick}> <NavLink to="/gallery"><a className="nav-link scrollto" href="" style={{ fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}>Gallery</a></NavLink></li>
            <li onClick={handleNavLinkClick} className="damp"><a className="nav-link scrollto" href="https://mechdampiitb.github.io/" style={{ fontFamily: "'Roboto', sans-serif" , fontWeight:'900', fontSize:'1.7rem'}}>DAMP</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileNavToggle} ></i>
        </nav>
      </div>
    </header>
	);
};

export default Navbar;

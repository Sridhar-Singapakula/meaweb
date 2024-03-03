
import { Link } from "react-router-dom";
import AOS from 'aos';
import { useEffect,useState } from 'react';
import logo from "../../img//logo.png";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    const handleNavLinkClick = () => {
      setIsMobileNavOpen(false);
    };
      useEffect(() => {
        AOS.init();
        
      }, []);

	return (
	<header id="header" className="fixed-top d-flex align-items-center">
      <div className="container  align-items-center justify-content-between" style={{display:"flex"}}>
        <Link to="/" style={{ display: "flex"}}>
          <div>
          <a href="/" className="logo me-auto">
            <img src={logo} alt="" />
          </a>
          </div>
       

        </Link>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
          
          <ul>
            <li onClick={handleNavLinkClick}><a className="nav-link scrollto active" href="/">Models</a></li>
            <li onClick={handleNavLinkClick}><a className="nav-link scrollto" href="/GC"><button className="button-4">Community</button></a></li>
            <li onClick={handleNavLinkClick}><a className="nav-link scrollto" href="#"><i class="bi bi-person-circle" style={{color:"#86B6F6",fontSize:"22px",marginRight:"8px"}}></i>Sridhar</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileNavToggle} ></i>
        </nav>
      </div>
    </header>
	);
};

export default Navbar;

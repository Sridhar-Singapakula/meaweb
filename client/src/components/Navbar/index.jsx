import { Link, useLocation } from "react-router-dom";
import AOS from 'aos';
import { useEffect, useState } from 'react';

import logo from "../../img/images/logo.png";
import "./style.css";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/resources", label: "Resources" },
    // { path: "/blogs", label: "Blogs" },
    { path: "/editorial", label: "Editorial" },
    { path: "/imp-docs", label: "Docs" },
    { path: "/team", label: "Team" },
    { path: "/gallery", label: "Gallery" },
    { path: "https://mechdampiitb.github.io/", label: "DAMP", external: true },
  ];

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" style={{ display: "flex" }}>
          <a href="/" className="logo me-auto">
            <img src={logo} alt="" />
          </a>
        </Link>

        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${isMobileNavOpen ? "mobile-nav-open" : ""}`}
        >
          <ul>
            {navItems.map((item, index) => (
              <li key={index} onClick={handleNavLinkClick}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link scrollto"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "900",
                      fontSize: "1.7rem",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link scrollto ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "900",
                      fontSize: "1.7rem",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={handleMobileNavToggle}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

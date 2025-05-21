

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={scrolled ? "navbar scrolled" : "navbar"}
    >
      <Container fluid className="px-4">
        {/* Logo */}
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src="/src/assets/images/seosko_logo.png"
            alt="SeoskoServ Logo"
            className="navbar-logo"
          />
        </BootstrapNavbar.Brand>

        {/* Toggle */}
        <BootstrapNavbar.Toggle aria-controls="navbar-content" />

        {/* Nav & Contact */}
        <BootstrapNavbar.Collapse id="navbar-content">
          <div className="navbar-content d-flex justify-content-between align-items-center w-100">
            
            {/* Center: Nav Links */}
            <Nav className="mx-auto nav-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/problem">Problem</Nav.Link>
              <Nav.Link as={Link} to="/why-us">Why Us</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            {/* Right: Contact Info */}
            <div className="contact-info d-none d-lg-flex align-items-center">
              <FiPhoneCall size={20} className="me-2" style={{color:"#00A5E7"}} />
              <div className="contact-text">
                <div className="small" style={{color:"#84898C"}}>Contact any time</div>
                <strong style={{color:"#84898C"}}>+91 8891768432</strong>
              </div>
            </div>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

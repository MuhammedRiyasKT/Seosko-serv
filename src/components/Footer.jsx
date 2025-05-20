import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Envelope, Telephone, GeoAlt, Facebook, Twitter, Linkedin, Instagram } from "react-bootstrap-icons"

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="g-4">
          <Col lg={4} className="pe-lg-5">
            <div className="footer-brand mb-4">
              <img src="/src/assets/images/seosko_logo.png" alt="SeoskoServ Logo" className="footer-logo" />
            </div>
            <p className="text-muted mb-4">
              Empowering businesses with innovative digital solutions that drive growth and transform customer experiences.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
            </div>
          </Col>
          
          <Col md={6} lg={4} className="ps-lg-5">
            <h5 className="footer-title mb-4">Contact Information</h5>
            <ul className="footer-contact-list">
              <li className="d-flex mb-3">
                <div className="footer-icon">
                  <Telephone size={18} />
                </div>
                <div>
                  <span className="d-block text-muted small">Phone</span>
                  <span>+91 8891768432</span>
                </div>
              </li>
              <li className="d-flex mb-3">
                <div className="footer-icon">
                  <Envelope size={18} />
                </div>
                <div>
                  <span className="d-block text-muted small">Email</span>
                  <span>info@seoskoserv.com</span>
                </div>
              </li>
              <li className="d-flex">
                <div className="footer-icon">
                  <GeoAlt size={18} />
                </div>
                <div>
                  <span className="d-block text-muted small">Website</span>
                  <span>www.SeoskoServ.com</span>
                </div>
              </li>
            </ul>
          </Col>
          
          <Col md={6} lg={4}>
            <h5 className="footer-title mb-4">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/problem">Our Approach</Link></li>
              <li><Link to="/why-us">Why Choose Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </Col>
        </Row>
        
        <div className="footer-divider"></div>
        
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="small text-muted mb-0">
              &copy; {new Date().getFullYear()} SeoskoServ Private Limited. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="footer-legal-links">
              <Link to="/privacy-policy" className="small">Privacy Policy</Link>
              <Link to="/terms" className="small">Terms of Service</Link>
              <Link to="/cookies" className="small">Cookie Policy</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
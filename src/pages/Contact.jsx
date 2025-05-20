import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Envelope, Telephone, GeoAlt, Building } from "react-bootstrap-icons"
import SectionWithBackground from "../components/SectionWithBackground"

export default function Contact() {
  return (
    <main>
      <section className="page-header">
        <Container>
          <h1 className="text-center">Contact Us</h1>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={5} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h2 className="mb-4">Get In Touch</h2>
                  <p className="lead mb-4">
                    We'd love to hear from you. Contact us using the information below or fill out the form.
                  </p>

                  <div className="contact-info">
                    <div className="d-flex align-items-center mb-3">
                      <Telephone className="text-primary me-3" size={24} />
                      <div>
                        <p className="mb-0">+91 8891768432</p>
                        <p className="mb-0">+91 9946775783</p>
                        <p className="mb-0">+965 55723383</p>
                        <p className="mb-0">+971 50 7613383</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <Envelope className="text-primary me-3" size={24} />
                      <p className="mb-0">info@seoskoserv.com</p>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <GeoAlt className="text-primary me-3" size={24} />
                      <p className="mb-0">www.SeoskoServ.com</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="h4 mb-3">Our Market</h3>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-primary me-2 mb-2 p-2">EUROPE</span>
                      <span className="badge bg-primary me-2 mb-2 p-2">MIDDLE EAST</span>
                      <span className="badge bg-primary me-2 mb-2 p-2">AFRICA</span>
                      <span className="badge bg-primary me-2 mb-2 p-2">INDIA</span>
                    </div>
                  </div>

                  <div className="hover-image mt-4">
                    <img src="/src/assets/images/orumarket.png" alt="Global presence" />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={7}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Send Us a Message</h3>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your first name" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your last name" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="text" placeholder="Enter your company name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="How can we help you?" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light-gray">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="section-title mb-4">OUR LOCATIONS</h2>
              <p className="lead">Serving businesses across multiple regions</p>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/dubai.jpg" alt="Middle East Office" />
                </div>
                <Card.Body className="text-center p-4">
                  <Building size={40} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">Middle East</h3>
                  <p>Dubai, UAE</p>
                  <p className="mb-0">+971 50 7613383</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/kochi.jpg" alt="India Office" />
                </div>
                <Card.Body className="text-center p-4">
                  <Building size={40} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">India</h3>
                  <p>Kochi, Kerala</p>
                  <p className="mb-0">+91 8891768432</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/kuwait.jpg" alt="Kuwait Office" />
                </div>
                <Card.Body className="text-center p-4">
                  <Building size={40} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">Kuwait</h3>
                  <p>Kuwait City</p>
                  <p className="mb-0">+965 55723383</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <SectionWithBackground backgroundImage="/src/assets/images/thankyou.jpg" className="py-5" overlayColor="rgba(0, 0, 0, 0.75)">
        <Row className="justify-content-center text-center">
          <Col md={8} className="text-white">
            <h1 className="display-4 mb-4">THANK YOU</h1>
            <p className="lead">
              We appreciate your interest in SeoskoServ. We look forward to helping your business grow and succeed.
            </p>
          </Col>
        </Row>
      </SectionWithBackground>
    </main>
  )
}

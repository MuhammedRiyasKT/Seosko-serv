import { Container, Row, Col, Card, Button } from "react-bootstrap"
import SectionWithBackground from "../components/SectionWithBackground"
import { Building, Headset, People, Laptop, Tools, ArrowRight } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

export default function Services() {
  return (
    <main>
      <section className="page-header">
        <Container>
          <h1 className="text-center">Our Services</h1>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="section-title mb-4">OUR SERVICES</h2>
              <p className="lead">
                We offer a comprehensive range of services designed to help your business thrive in the modern world.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/cloudsolution.png" alt="Cloud office solutions" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <Building size={48} className="text-primary" />
                  </div>
                  <Card.Title as="h4" className="mb-3">
                    CLOUD OFFICE SOLUTIONS
                  </Card.Title>
                  <Card.Text>Coworking Spaces, Collaboration Tools, VOIP Phone Facility, Virtual Offices</Card.Text>
                  <Button variant="outline-primary" className="mt-3" size="sm">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/hrservice.png" alt="HR services" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <People size={48} className="text-primary" />
                  </div>
                  <Card.Title as="h4" className="mb-3">
                    HR & WORKFORCE MANAGEMENT
                  </Card.Title>
                  <Card.Text>
                    Recruitment & Onboarding, Engagement & Performance Tracking Tools, Payroll & Compliance Management
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3" size="sm">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/officesupport.png" alt="Back-office support" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <Headset size={48} className="text-primary" />
                  </div>
                  <Card.Title as="h4" className="mb-3">
                    BACK-OFFICE <br /> SUPPORT
                  </Card.Title>
                  <Card.Text>Legal Support, Travel Desk, Insurance Coverage</Card.Text>
                  <Button variant="outline-primary" className="mt-3" size="sm">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/operations.jpg" alt="Business operations" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <Tools size={48} className="text-primary" />
                  </div>
                  <Card.Title as="h4" className="mb-3">
                    BUSINESS OPERATIONS SUPPORT
                  </Card.Title>
                  <Card.Text>Administrative Support, Financial Services, Customer Support</Card.Text>
                  <Button variant="outline-primary" className="mt-3" size="sm">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/techsolutions.jpg" alt="Technology solutions" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <Laptop size={48} className="text-primary" />
                  </div>
                  <Card.Title as="h4" className="mb-3">
                    TECHNOLOGY DRIVEN SOLUTIONS
                  </Card.Title>
                  <Card.Text>IT Support, Market Research, Digital Marketing</Card.Text>
                  <Button variant="outline-primary" className="mt-3" size="sm">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <SectionWithBackground backgroundImage="/src/assets/images/target.jpg" overlayColor="rgba(0, 0, 0, 0.75)">
        <Row className="justify-content-center">
          <Col md={8} className="text-center text-white">
            <h4 className="display-4 mb-5">OUR TARGET AUDIENCE</h4>
            <Row className="mt-4">
              <Col md={4} className="mb-4 mb-md-0">
                <div className="p-4 rounded bg-white bg-opacity-10">
                  <h3 className="h2">Corporates</h3>
                </div>
              </Col>
              <Col md={4} className="mb-4 mb-md-0">
                <div className="p-4 rounded bg-white bg-opacity-10">
                  <h3 className="h2">STARTUPs</h3>
                </div>
              </Col>
              <Col md={4}>
                <div className="p-4 rounded bg-white bg-opacity-10">
                  <h3 className="h2">SMEs</h3>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionWithBackground>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <div className="image-card">
                <img src="/src/assets/images/homewework.jpg" alt="Service process" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Our Process</h3>
                    <p>We follow a streamlined approach to deliver exceptional service</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">HOW WE WORK</h2>
              <div className="d-flex mb-4">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    1
                  </div>
                </div>
                <div>
                  <h4>Consultation</h4>
                  <p>We begin with a thorough assessment of your business needs and challenges.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    2
                  </div>
                </div>
                <div>
                  <h4>Customized Solution</h4>
                  <p>Our team develops a tailored solution designed specifically for your business.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    3
                  </div>
                </div>
                <div>
                  <h4>Implementation</h4>
                  <p>We seamlessly integrate our solutions into your existing operations.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    4
                  </div>
                </div>
                <div>
                  <h4>Ongoing Support</h4>
                  <p>Our team provides continuous support to ensure your business thrives.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-gradient-primary">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} className="text-white">
              <h2 className="mb-4">READY TO TRANSFORM YOUR BUSINESS?</h2>
              <p className="lead mb-4">
                Contact us today to learn how our services can help your business grow and thrive.
              </p>
              <Button as={Link} to="/contact" variant="light" size="lg">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

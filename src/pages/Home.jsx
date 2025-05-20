import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ImageSlider from "../components/ImageSlider"
import SectionWithBackground from "../components/SectionWithBackground"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedElement from "../components/AnimatedElement"
import { ArrowRight, PeopleFill, Building, Laptop } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main>
      {/* Hero Slider Section */}
      <section className="slider-section">
        <ImageSlider />
      </section>

      {/* Introduction Section */}
      <AnimatedSection className="py-5" bgVectors={true}>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h2 className="section-title mb-4">HELLO!</h2>
            <p className="lead mb-4">
              Enter SEOSKOSERV, the partner every SME needs to drive efficiency and sustainable growth.
            </p>
            <p className="mb-4">
              SEOSKOSERV, the partner every SME in the GCC region needs to drive efficiency and sustainable growth.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInLeft" delay={1}>
              <div className="image-card">
                <img src="/src/assets/images/office1.png" alt="Modern office space" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Modern Workspaces</h3>
                    <p>Designed for productivity and collaboration</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </Col>
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInRight" delay={1}>
              <div className="image-card">
                <img src="/src/assets/images/meeting1.jpg" alt="Team meeting" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Collaborative Environment</h3>
                    <p>Where great ideas come to life</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Introduction Section with Background */}
      <SectionWithBackground backgroundImage="/src/assets/images/introduction.jpg" className="py-5" overlayColor="rgba(0, 0, 0, 0.75)">
        <Row className="justify-content-end">
          <Col md={8} className="text-center text-white">
            <AnimatedElement>
              <h1 className="display-4 fw-bold mb-4">INTRODUCTION</h1>
              <p className="lead mb-4">
                SEOSKOSERV is transforming how businesses operate by providing scalable, cost-effective services
                tailored to local market needs.
              </p>
              <Button as={Link} to="/why-us" variant="light" className="mt-3 animate-pulse">
                Learn More <ArrowRight />
              </Button>
            </AnimatedElement>
          </Col>
        </Row>
      </SectionWithBackground>

      {/* Who We Are Section */}
      <AnimatedSection className="py-5 bg-light-gray" bgDots={true}>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <AnimatedElement animation="slideInLeft">
              <h2 className="section-title text-start mb-4">WHO ARE WE?</h2>
              <p>
                We, at SeoskoServ, empower businesses by providing cost-effective cloud office, co-working space and HR
                solutions that drive efficiency and reduce operational costs.
              </p>
              <p>
                By understanding the unique demands of the region, we deliver localized solutions backed by global
                expertise, ensuring every business has the tools to thrive.
              </p>
              <p>We specialize in remote office management, back office, outsourcing and business solutions.</p>

              <div className="hover-image mt-4">
                <img src="/src/assets/images/whoarewe.png" alt="Business presentation" />
              </div>
            </AnimatedElement>
          </Col>
          <Col lg={6}>
            <AnimatedElement animation="slideInRight">
              <div className="vision-box p-4 bg-white shadow-sm rounded">
                <h3 className="mb-3">OUR VISION</h3>
                <p>
                  To be a global leader in remote work solutions, enabling businesses across industries to thrive in
                  today's dynamic world.
                </p>
                <div className="market-regions mt-4">
                  <h4 className="mb-3">OUR MARKET</h4>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="region-box">EUROPE</div>
                    <div className="region-box">MIDDLE EAST</div>
                    <div className="region-box">AFRICA</div>
                    <div className="region-box">INDIA</div>
                  </div>
                </div>

                <div className="hover-image mt-4">
                  <img src="/src/assets/images/orumarket.png" alt="Global business meeting" />
                </div>
              </div>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Services Preview Section */}
      <AnimatedSection className="py-5" bgVectors={true}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title mb-4">OUR SERVICES</h2>
            <p className="lead">Comprehensive solutions tailored to your business needs</p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/cloudoffice.jpg" alt="Coworking space" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <Building size={40} className="text-primary" />
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">
                    Cloud Office Solutions
                  </Card.Title>
                  <Card.Text>
                    Virtual offices and coworking spaces designed for productivity and collaboration.
                  </Card.Text>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>

          <Col md={4} className="mb-4">
            <AnimatedElement delay={2}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/hrworkforce.jpg" alt="HR services" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <PeopleFill size={40} className="text-primary" />
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">
                    HR & Workforce Management
                  </Card.Title>
                  <Card.Text>
                    Comprehensive HR solutions from recruitment to payroll and compliance management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>

          <Col md={4} className="mb-4">
            <AnimatedElement delay={3}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/techsolution.jpg" alt="Tech support" />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <Laptop size={40} className="text-primary" />
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">
                    Technology Solutions
                  </Card.Title>
                  <Card.Text>IT support, digital marketing, and innovative tech solutions for your business.</Card.Text>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <AnimatedElement animation="fadeInUp" delay={4}>
            <Button as={Link} to="/services" variant="primary" size="lg" className="animate-pulse">
              View All Services
            </Button>
          </AnimatedElement>
        </div>
      </AnimatedSection>

      {/* Why SeoskoServ Section with Background */}
      <SectionWithBackground backgroundImage="/src/assets/images/whychoose.jpg" className="p-5 img-fluid" overlayColor="rgba(0, 0, 0, 0.75)">
        <Row className="justify-content-start">
          <Col md={8} className="text-center text-white">
            <AnimatedElement>
              <h1 className="display-4 fw-bold mb-4">WHY SEOSKOSERV?</h1>
              <p className="lead mb-4">
                Reimagine your workspace with Cloud Office Solutions—secure, scalable virtual offices designed for
                seamless collaboration and growth.
              </p>
              <Button as={Link} to="/why-us" variant="light" className="mt-3 animate-pulse">
                Learn More <ArrowRight />
              </Button>
            </AnimatedElement>
          </Col>
        </Row>
      </SectionWithBackground>

      {/* Client Testimonials */}
      <AnimatedSection className="py-5 bg-light-gray" bgWave={true}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title mb-4">WHAT OUR CLIENTS SAY</h2>
            <p className="lead">Hear from businesses that have transformed with our solutions</p>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInLeft" delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div
                        className="hover-image"
                        style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden" }}
                      >
                        <img
                          src="/src/assets/images/ceo.png"
                          alt="Client"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-1">Sarah Johnson</h5>
                      <p className="text-muted mb-0">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    "SeoskoServ transformed our operations. Their cloud office solutions allowed us to scale rapidly
                    without the overhead costs. Highly recommended for any growing business."
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInRight" delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div
                        className="hover-image"
                        style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden" }}
                      >
                        <img
                          src="/src/assets/images/director.png"
                          alt="Client"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-1">Ahmed Al-Farsi</h5>
                      <p className="text-muted mb-0">Director, Gulf Enterprises</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    "The HR and workforce management services provided by SeoskoServ have been invaluable. They
                    understand the local market and provide solutions that truly work for our business."
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-5" bgVectors={true}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title mb-4">OUR IMPACT</h2>
            <p className="lead">See the difference our solutions make for businesses like yours</p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={1}>
              <div className="stat-item">
                <div className="stat-number">40%</div>
                <div className="stat-label">REDUCED OVERHEADS</div>
              </div>
            </AnimatedElement>
          </Col>

          <Col md={4} className="mb-4">
            <AnimatedElement delay={2}>
              <div className="stat-item">
                <div className="stat-number">65%</div>
                <div className="stat-label">INCREASED REVENUE</div>
              </div>
            </AnimatedElement>
          </Col>

          <Col md={4} className="mb-4">
            <AnimatedElement delay={3}>
              <div className="stat-item">
                <div className="stat-number">85%</div>
                <div className="stat-label">CLIENT SATISFACTION</div>
              </div>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Client Logos */}
      <AnimatedSection className="py-5 bg-light-gray" bgDots={true}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title mb-4">TRUSTED BY</h2>
            <p className="lead">Leading businesses across multiple industries</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={6} md={3} className="mb-4">
            <AnimatedElement delay={1}>
              <div className="client-logo">
                <img src="/src/assets/images/client1.png" alt="Client Logo 1" />
              </div>
            </AnimatedElement>
          </Col>
          <Col xs={6} md={3} className="mb-4">
            <AnimatedElement delay={2}>
              <div className="client-logo">
                <img src="/src/assets/images/client2.png" alt="Client Logo 2" />
              </div>
            </AnimatedElement>
          </Col>
          <Col xs={6} md={3} className="mb-4">
            <AnimatedElement delay={3}>
              <div className="client-logo">
                <img src="/src/assets/images/client3.png" alt="Client Logo 3" />
              </div>
            </AnimatedElement>
          </Col>
          <Col xs={6} md={3} className="mb-4">
            <AnimatedElement delay={4}>
              <div className="client-logo">
                <img src="/src/assets/images/client4.png" alt="Client Logo 4" />
              </div>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Call to Action */}
      <section className="py-5 bg-gradient-primary position-relative overflow-hidden">
        <div className="bg-vector bg-vector-1"></div>
        <div className="bg-vector bg-vector-2"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <AnimatedElement>
                <h2 className="mb-4 text-white">READY TO TRANSFORM YOUR BUSINESS?</h2>
                <p className="lead mb-4">
                  Contact us today to learn how SeoskoServ can help your business thrive in the modern world.
                </p>
                <Button as={Link} to="/contact" variant="light" size="lg" className="animate-pulse">
                  Get Started
                </Button>
              </AnimatedElement>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

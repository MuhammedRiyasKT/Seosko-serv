import { Container, Row, Col, Card } from "react-bootstrap"
import { CheckCircleFill, Star, Trophy, Award } from "react-bootstrap-icons"
import SectionWithBackground from "../components/SectionWithBackground"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedElement from "../components/AnimatedElement"

export default function WhyUs() {
  return (
    <main>
      <section className="page-header">
        <Container>
          <h1 className="text-center">Why Choose SeoskoServ</h1>
        </Container>
      </section>

      <AnimatedSection className="py-5" bgVectors={true}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title mb-4">WHAT SETS US APART?</h2>
            <p className="lead">
              SeoskoServ offers unique advantages that make us the preferred partner for businesses looking to scale
              efficiently.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={3} className="mb-4">
            <AnimatedElement delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/cost.jpg" alt="Cost efficiency" />
                </div>
                <Card.Body className="text-center p-4">
                  <h3 className="h4 mb-3">Cost Efficiency</h3>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2">
                      <CheckCircleFill className="text-success me-2" />
                      NO Employee Allowances and Benefits
                    </li>
                    <li className="mb-2">
                      <CheckCircleFill className="text-success me-2" />
                      HIGH Reduction in Operation Cost
                    </li>
                    <li className="mb-2">
                      <CheckCircleFill className="text-success me-2" />
                      NO Visa Charges Required
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <AnimatedElement delay={2}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/scalable.jpg" alt="Scalable solutions" />
                </div>
                <Card.Body className="text-center p-4">
                  <h3 className="h4 mb-3">Scalable Solutions</h3>
                  <p>
                    Our services are designed to grow with your business. Scale up or down as needed, without long-term
                    commitments or significant capital investments.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <AnimatedElement delay={3}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/support.jpg" alt="Localized support" />
                </div>
                <Card.Body className="text-center p-4">
                  <h3 className="h4 mb-3">Localized Support</h3>
                  <p>
                    We understand the unique challenges of the GCC region and provide tailored solutions that address
                    local business needs and regulatory requirements.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <AnimatedElement delay={4}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/expert.jpg" alt="Expert team" />
                </div>
                <Card.Body className="text-center p-4">
                  <h3 className="h4 mb-3">Expert Team</h3>
                  <p>
                    Our professionals bring years of experience across various industries, ensuring you receive
                    high-quality service and strategic guidance.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      <SectionWithBackground backgroundImage="/src/assets/images/statics.png" className="bg-gradient-overlay" overlayColor="rgba(0, 0, 0, 0.75)">
        <Row className="justify-content-center">
          <Col md={10} className="text-center text-white">
            <AnimatedElement>
              <h1 className="display-4 mb-5">STATISTICS</h1>
              <Row className="mt-4">
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="p-4 rounded bg-white bg-opacity-10 animate-pulse">
                    <h3 className="h2 text-white">REDUCED</h3>
                    <p className="lead mb-0">Overheads</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="p-4 rounded bg-white bg-opacity-10 animate-pulse">
                    <h3 className="h2 text-white">INCREASED</h3>
                    <p className="lead mb-0">Total revenue</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-4 rounded bg-white bg-opacity-10 animate-pulse">
                    <h3 className="h2 text-white">BOOSTED</h3>
                    <p className="lead mb-0">Market share</p>
                  </div>
                </Col>
              </Row>
            </AnimatedElement>
          </Col>
        </Row>
      </SectionWithBackground>

      <AnimatedSection className="py-5" bgDots={true}>
        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <h2 className="section-title mb-4">OUR ACHIEVEMENTS</h2>
            <p className="lead">Recognition of our commitment to excellence</p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={1}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <Star size={50} className="text-warning mb-3" />
                  <h3 className="h4 mb-3">Excellence in Service</h3>
                  <p>Recognized for outstanding customer service and client satisfaction</p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={2}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <Trophy size={50} className="text-warning mb-3" />
                  <h3 className="h4 mb-3">Industry Leader</h3>
                  <p>Named as one of the top business solution providers in the GCC region</p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={3}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <Award size={50} className="text-warning mb-3" />
                  <h3 className="h4 mb-3">Innovation Award</h3>
                  <p>Recognized for innovative approaches to remote work solutions</p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      <AnimatedSection className="py-5 bg-light-gray" bgWave={true}>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="border-0 shadow-sm">
              <Row className="g-0">
                <Col md={5}>
                  <div className="hover-image h-100">
                    <img
                      src="/src/assets/images/ourteam.jpg"
                      alt="Our team"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <Card.Body className="p-5">
                    <AnimatedElement animation="slideInRight">
                      <h2 className="mb-4">WHO ARE WE?</h2>
                      <p className="lead">
                        We, at SeoskoServ, empower businesses by providing cost-effective cloud office, co-working space
                        and HR solutions that drive efficiency and reduce operational costs.
                      </p>
                      <p>
                        By understanding the unique demands of the region, we deliver localized solutions backed by
                        global expertise, ensuring every business has the tools to thrive.
                      </p>
                      <p>We specialize in remote office management, back office, outsourcing and business solutions.</p>
                      <div className="mt-4">
                        <h3 className="mb-3">OUR VISION</h3>
                        <p>
                          To be a global leader in remote work solutions, enabling businesses across industries to
                          thrive in today's dynamic world.
                        </p>
                      </div>
                    </AnimatedElement>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </AnimatedSection>
    </main>
  )
}

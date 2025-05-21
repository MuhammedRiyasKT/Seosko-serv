import { Container, Row, Col, Card } from "react-bootstrap"
import SectionWithBackground from "../components/SectionWithBackground"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedElement from "../components/AnimatedElement"
import { XCircleFill, CheckCircleFill } from "react-bootstrap-icons"

export default function Problem() {
  return (
    <main>
      <section className="page-header">
        <Container>
          <h1 className="text-center">Scaling Your Business</h1>
        </Container>
      </section>

      <AnimatedSection className="py-5" bgVectors={true}>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title mb-4" style={{color:"#00A5E7"}}>THE CHALLENGES</h2>
            <p className="lead" style={{color:"#84898C"}}>
              Scaling a business comes with significant challenges that can impede growth and strain resources.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInLeft" delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/turnaround.jpg" alt="Business meeting" />
                </div>
                <Card.Body className="p-4">
                  <h2 className="h3 mb-3" style={{color:"#00A5E7"}}>A Quick Turnaround</h2>
                  <p style={{color:"#84898C"}}>
                    In today's fast-paced business environment, companies need to adapt quickly to market changes.
                    However, scaling operations often requires significant time and resources that many businesses
                    simply don't have.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInRight" delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/biggerteam.jpg" alt="Office space" />
                </div>
                <Card.Body className="p-4">
                  <h2 className="h3 mb-3" style={{color:"#00A5E7"}}>A Bigger Team</h2>
                  <p style={{color:"#84898C"}}>
                    Expanding your workforce comes with challenges: recruitment costs, training time, office space, and
                    ongoing management. These factors can slow down your growth trajectory and strain your existing
                    resources.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInLeft" delay={2}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/bigger.jpg" alt="Large office" />
                </div>
                <Card.Body className="p-4">
                  <h2 className="h3 mb-3" style={{color:"#00A5E7"}}>A Bigger Office</h2>
                  <p style={{color:"#84898C"}}>
                    Physical expansion leads to higher overhead, long lease terms, and infrastructure costs.
                    These expenses create financial strain.
                    They reduce flexibility and slow your response to market changes.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={6} className="mb-4">
            <AnimatedElement animation="slideInRight" delay={2}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/need.jpg" alt="Business presentation" />
                </div>
                <Card.Body className="p-4">
                  <h2 className="h3 mb-3" style={{color:"#00A5E7"}}>What Do You Need?</h2>
                  <p style={{color:"#84898C"}}>
                    The real question is: how can you scale efficiently without compromising quality or breaking the
                    bank? Traditional scaling methods often create more problems than they solve.
                  </p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>
      </AnimatedSection>

      <SectionWithBackground backgroundImage="/src/assets/images/resources.jpg" overlayColor="rgba(0, 0, 0, 0.75)">
        <Row className="justify-content-center">
          <Col md={8} className="text-center text-white">
            <AnimatedElement>
              <h1 className="display-4 mb-4" >The Resources You Do Not Have</h1>
              <Row className="mt-5">
                <Col md={4} className="mb-4">
                  <div className="d-flex flex-column align-items-center animate-pulse">
                    <XCircleFill size={40} className="text-danger mb-3" />
                    <h3 className="h4">The Capital</h3>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="d-flex flex-column align-items-center animate-pulse">
                    <XCircleFill size={40} className="text-danger mb-3" />
                    <h3 className="h4">The Time</h3>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="d-flex flex-column align-items-center animate-pulse">
                    <XCircleFill size={40} className="text-danger mb-3" />
                    <h3 className="h4">The Resources</h3>
                  </div>
                </Col>
              </Row>
            </AnimatedElement>
          </Col>
        </Row>
      </SectionWithBackground>

      <AnimatedSection className="py-5 bg-light-gray" bgDots={true}>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="section-title mb-4" style={{color:"#00A5E7"}}>THE SOLUTION</h2>
            <p className="lead mb-4" style={{color:"#84898C"}}>
              This is where SEOSKOSERV comes in. We provide scalable, cost-effective solutions that allow you to grow
              without the traditional burdens of expansion.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <AnimatedElement delay={1}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/workspace.jpg" alt="Flexible workspace" />
                </div>
                <Card.Body className="text-center p-4">
                  <CheckCircleFill size={40} className="text-success mb-3" />
                  <h3 className="h4 mb-3" style={{color:"#00A5E7"}}>Flexible Resources</h3>
                  <p style={{color:"#84898C"}}>Scale flexibly without long-term commitments or major investments.</p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={2}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/solution.jpg" alt="Cost-effective solutions" />
                </div>
                <Card.Body className="text-center p-4">
                  <CheckCircleFill size={40} className="text-success mb-3" />
                  <h3 className="h4 mb-3" style={{color:"#00A5E7"}}>Cost Efficiency</h3>
                  <p style={{color:"#84898C"}}>Reduce operational costs significantly with our streamlined solutions.</p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
          <Col md={4} className="mb-4">
            <AnimatedElement delay={3}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="hover-image">
                  <img src="/src/assets/images/deployment.jpg" alt="Quick deployment" />
                </div>
                <Card.Body className="text-center p-4">
                  <CheckCircleFill size={40} className="text-success mb-3" />
                  <h3 className="h4 mb-3" style={{color:"#00A5E7"}}>Rapid Deployment</h3>
                  <p style={{color:"#84898C"}}>Get up and running quickly with our turnkey business solutions.</p>
                </Card.Body>
              </Card>
            </AnimatedElement>
          </Col>
        </Row>


      </AnimatedSection>
    </main>
  )
}

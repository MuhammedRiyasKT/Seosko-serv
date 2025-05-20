import { Card } from "react-bootstrap"

export default function ServiceCard({ title, description, icon }) {
  return (
    <Card className="service-card h-100 border-0 shadow-sm">
      <Card.Body className="text-center p-4">
        <div className="service-icon mb-3">{icon}</div>
        <Card.Title as="h4" className="mb-3">
          {title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

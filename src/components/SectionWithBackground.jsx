import { Container } from "react-bootstrap"

export default function SectionWithBackground({
  backgroundImage,
  children,
  className = "",
  overlayColor = "rgba(0, 165, 231, 0.7)",
  minHeight = "500px",
}) {
  return (
    <section
      className={`section-with-background ${className} position-relative overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        minHeight: minHeight,
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
          zIndex: 1,
        }}
      />

      {/* Background Vectors */}
      <div className="bg-vector bg-vector-1"></div>
      <div className="bg-vector bg-vector-2"></div>
      <div className="bg-vector bg-vector-3"></div>
      <div className="bg-vector bg-vector-4"></div>

      <Container style={{ position: "relative", zIndex: 2 }}>{children}</Container>
    </section>
  )
}



import { useEffect, useState, useRef } from "react"
import { Container } from "react-bootstrap"

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  threshold = 0.1,
  bgVectors = false,
  bgDots = false,
  bgWave = false,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [threshold])

  return (
    <section ref={sectionRef} className={`${className} position-relative overflow-hidden`}>
      {bgVectors && (
        <>
          <div className="bg-vector bg-vector-1"></div>
          <div className="bg-vector bg-vector-2"></div>
          <div className="bg-vector bg-vector-3"></div>
          <div className="bg-vector bg-vector-4"></div>
        </>
      )}
      {bgDots && <div className="bg-dots"></div>}
      {bgWave && <div className="bg-wave"></div>}
      <Container className={isVisible ? `animate-${animation}` : "opacity-0"}>{children}</Container>
    </section>
  )
}

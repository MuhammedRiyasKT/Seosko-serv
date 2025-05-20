"use client"

import { useEffect, useState, useRef } from "react"

export default function AnimatedElement({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

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

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold])

  const delayClass = delay ? `delay-${delay}00` : ""

  return (
    <div ref={elementRef} className={`${className} ${isVisible ? `animate-${animation} ${delayClass}` : "opacity-0"}`}>
      {children}
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap"
import slider1 from "../assets/images/slider1.jpg"
import slider2 from "../assets/images/slider2.jpg"
import slider3 from "../assets/images/slider3.jpg"
import "./ImageSlider.css" // Make sure to import your CSS

export default function ImageSlider() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {[slider1, slider2, slider3].map((img, i) => (
          <Carousel.Item key={i}>
            <img className="slider-img" src={img} alt={`Slide ${i + 1}`} />
            <Carousel.Caption className="slider-caption">
              <h1>
                {i === 0 && "WELCOME TO THE FUTURE OF WORK!"}
                {i === 1 && "SCALING YOUR BUSINESS"}
                {i === 2 && "INNOVATIVE SOLUTIONS"}
              </h1>
              <p>
                {i === 0 &&
                  "In the fast-paced world of business, small and medium enterprises (SMEs) face unique challenges."}
                {i === 1 &&
                  "SEOSKOSERV, the partner every SME in the GCC region needs to drive efficiency and sustainable growth."}
                {i === 2 &&
                  "We specialize in remote office management, back office, outsourcing and business solutions."}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

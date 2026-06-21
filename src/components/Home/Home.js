import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import myPortrait from "../../Assets/sam.png"; 
import Particle from "../Particle";
import {  FaHandPointDown } from "react-icons/fa"; 
import Type from "./Type";
import Home2 from "./Home2";

function Home() {

  // --- SCROLL ANIMATION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element enters the viewport, add the trigger class
          if (entry.isIntersecting) {
            entry.target.classList.add("start-animation");
            observer.unobserve(entry.target); // Stops observing once animated
          }
        });
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    // Timeout ensures the DOM is fully painted before we search for the elements
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        ".animated-element, .slide-in-left, .slide-in-right, .animated-icon, .staggered-card"
      );
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* Overriding the 9rem padding from style.css here with inline styles */}
        <Container className="home-content">
          
          {/* --- BREATHTAKING GEOMETRIC HERO SECTION --- */}
          <Row>
            
            {/* Left Column: Typography & Socials */}
            <Col lg={7} md={12} className="home-header">
              
              <div className="d-flex align-items-center mb-3">
                <h1 className="heading">
                  Hello there! {" "}
                  <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> 
                </h1>
                <span className="hero-decorative-line"></span>
              </div>
              
              <h1 className="heading-name" style={{ marginBottom: "15px" }}>
                I'M <strong className="main-name"> SAN SHWE</strong>
              </h1>

              <div style={{ paddingLeft: 45, marginBottom: "20px", textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ paddingLeft: 45, fontSize: "1.15rem", color: "#ccd6f6", lineHeight: "1.8", fontWeight: "300", maxWidth: "600px", marginBottom: "30px" }}>
                I orchestrate technical projects from scope to delivery. By combining front-end development architecture with a strict habit of consistently producing and distributing precise meeting minutes and notes, I ensure absolute alignment across teams and deliver visually appealing, scalable solutions.
              </p>


              
            </Col>

            {/* Right Column: Geometric Portrait Frame wrapped in Tilt */}
            <Col lg={5} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", position: "relative", zIndex: 10 }}>
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2500}>
                <div className="portrait-wrapper">
                  
                  {/* The offset geometric outline */}
                  <div className="portrait-outline"></div>
                  
                  {/* The colored background shape */}
                  <div className="portrait-bg">
                    <img src={myPortrait} alt="San Shwe" className="portrait-img" />
                  </div>

                  {/* Floating Animated Badges */}
                  <div className="floating-badge badge-left animated-badge-1">
                    Project Coordinator
                  </div>
                  <div className="floating-badge badge-right animated-badge-2">
                    Full-Stack Dev
                  </div>

                </div>
              </Tilt>
            </Col>
          </Row>

        </Container>
      </Container>
      <Container style={{ textAlign: "left" }}>
        <div 
          className="check-out-container" 
          onClick={() => window.scrollBy({ top: 700, behavior: 'smooth' })}
        >
          <span className="check-out-text">Explore My Expertise</span>
          <FaHandPointDown className="finger-bounce" />
        </div>
      </Container>
      
          {/* ... Your Dashboard Navigation Cards go here ... */}
          <Home2/>

          

    </section>
  );
}

export default Home;
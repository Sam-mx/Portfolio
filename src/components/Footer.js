import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* Contact Info replaces "Designed and Developed by..." */}
        <Col md="4" className="footer-copywright">
          <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", margin: "0" }}>
            <a 
              href="mailto:sanxhwe@gmail.com" 
              style={{ color: "white", textDecoration: "none", transition: "0.3s ease" }}
              onMouseEnter={(e) => e.target.style.color = "#19EAEE"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              <FaEnvelope style={{ marginRight: "6px", marginBottom: "3px" }} />
              sanxhwe@gmail.com
            </a>
            
            {/* Subtle separator pipe between email and phone */}
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
            
            <a 
              href="tel:+6584164808" 
              style={{ color: "white", textDecoration: "none", transition: "0.3s ease" }}
              onMouseEnter={(e) => e.target.style.color = "#19EAEE"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              <FaPhoneAlt style={{ marginRight: "5px", marginBottom: "2px" }} />
              +65 8416 4808
            </a>
          </h3>
        </Col>
        
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Sam</h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Sam-mx"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/sanxhwe?s=21"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/san-shwe-564a32169/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/san_xhwe/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
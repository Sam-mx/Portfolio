import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <i>
              I am a <b className="purple">Computer Science Graduate</b> and <b className="purple">Project Operations Specialist</b>, distinctively positioned at the intersection of software development and business execution.
              <br />
              <br />
              With a strong technical foundation in the 
              <b className="purple"> MERN Stack (MongoDB, Express, React, Node.js) </b> and <b className="purple">TypeScript</b>, I specialize in building scalable, real-time web applications. My recent work includes architecting AI-enhanced collaboration tools using 
              <b className="purple"> WebSockets </b> and <b className="purple">Next.js</b>.
              <br />
              <br />
              Beyond coding, I bring professional experience in
                <b className="purple"> Technical Project Coordination</b>, I leverage <b className="purple"> Power BI </b> for data-driven decision-making and utilize tools like
                <b className="purple"> ClickUp </b> and <b className="purple">Microsoft Project</b> to orchestrate complex workflows. My background extends into <b className="purple"> IT Operations</b>, where I have successfully implemented <b className="purple"> Data Loss Prevention (DLP) </b> protocols and managed multi-site technical assets.
              
              <br/>
              <br />
              I am particularly interested in applying this unique blend of 
              <b className="purple"> technical architecture </b> and <b className="purple">operational discipline</b> to the education sector, developing innovative web-based learning platforms that are secure, data-rich, and user-centric.
              <br />
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sam-mx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/sanxhwe?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/san-shwe-sam-564a32169/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/san_xhwe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

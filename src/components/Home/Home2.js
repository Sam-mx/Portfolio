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
            I’ve developed a deep passion for <b className="purple">programming and project management</b>, discovering the power of combining these two fields to create impactful solutions. 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              
                <b className="purple"> Javascript</b>.  I enjoy turning ideas into reality by managing projects while staying hands-on with coding in
              
              <b className="purple"> JavaScript and TypeScript.</b>
              
              <br />
              <br />
              I enjoy exploring modern technologies like&nbsp;
              
                <b className="purple">React.js and Next.js </b>I have a keen interest in developing&nbsp;
                <b className="purple">
                innovative web technologies and products,&nbsp;
                </b>
                especially in the education sector.
              
              <br />
              <br />
              
              Whenever possible, I apply my expertise in both <b className="purple">development and project management.</b> From leading teams to delivering projects on time, I leverage tools like
                <b className="purple">
                  {" "}
                  ClickUp and Microsoft Project
                </b>
              
              &nbsp; to ensure smooth execution.
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
                  href="https://www.linkedin.com/in/san-shwe-564a32169/"
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

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiPython
} from "react-icons/di";
import {
  SiMysql,
  SiSqlite,
  SiTypescript,
  SiNextdotjs,
  SiWordpress,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.1s' }}>
        <DiHtml5 />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.2s' }}>
        <DiCss3 />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.3s' }}>
        <DiBootstrap />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.4s' }}>
        <DiJavascript1 />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.5s' }}>
        <SiTypescript />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.6s' }}>
        <DiReact />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.7s' }}>
        <SiTailwindcss />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Tailwind</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.8s' }}>
        <DiMongodb />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.9s' }}>
        <SiNextdotjs />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.0s' }}>
        <DiNodejs />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.1s' }}>
        <DiGit />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.2s' }}>
        <DiJava />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.3s' }}>
        <SiWordpress />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>WordPress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.4s' }}>
        <SiMysql />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.5s' }}>
        <SiSqlite />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>SQLite</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.6s' }}>
        <DiPython />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Python</p>
      </Col>
    </Row>
  );
}

export default Techstack;
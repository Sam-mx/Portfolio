import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiXampp,
  SiGithub,
  SiVercel,
  SiRender,
  SiStripe,
  SiClickup,
  SiMiro,
  SiMicrosoftoffice,
  SiMicrosoftsharepoint,
  SiJira,
  SiAsana,
  SiZapier, 
  SiMicrosoftexcel, 
  SiConfluence
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.1s' }}>
        <SiGithub />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.2s' }}>
        <SiClickup />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>ClickUp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.3s' }}>
        <SiAsana />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Asana</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.4s' }}>
        <SiJira />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.5s' }}>
        <SiMiro />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Miro</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.6s' }}>
        <SiMicrosoftoffice />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>MS Office</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.7s' }}>
        <SiMicrosoftsharepoint />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>SharePoint</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.8s' }}>
        <SiVisualstudiocode />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '0.9s' }}>
        <SiVisualstudio />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.0s' }}>
        <SiXampp />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>XAMPP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.1s' }}>
        <SiVercel />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.2s' }}>
        <SiRender />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Render</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons animated-icon" style={{ animationDelay: '1.3s' }}>
        <SiStripe />
        <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Stripe</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons animated-icon">
  <SiConfluence />
  <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Confluence</p>
</Col>
<Col xs={4} md={2} className="tech-icons animated-icon">
  <SiMicrosoftexcel />
  <p style={{fontSize: "0.9rem", marginTop: "15px", marginBottom: 0, fontWeight: "600"}}>Power Query</p>
</Col>
    </Row>
  );
}

export default Toolstack;
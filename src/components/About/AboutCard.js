import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "rgba(20, 15, 35, 0.6)", border: "1px solid rgba(25, 234, 238, 0.2)", borderRadius: "12px", padding: "20px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1rem", color: "#ccd6f6", lineHeight: "1.8" }}>
            I am a <b className="purple">Computer Science Graduate</b> and <b className="purple">IT Project Coordinator</b> dedicated to bridging the gap between technical execution and business operations. 
            <br />
            <br />
            My approach is rooted in <b className="purple">methodical project delivery</b>. Beyond software development, I prioritize establishing rigorous documentation habits, such as consistent meeting minutes and structured SOPs, to ensure transparency and audit-readiness in every initiative.
          </p>

          <ul style={{ marginTop: "20px" }}>
            <li style={{ listStyleType: "none", paddingBottom: "15px", fontSize: "1.05rem", color: "#e2e2e2" }}>
              <ImPointRight style={{ color: "#19EAEE", marginRight: "10px" }} /> 
              <b className="purple">Visual Communication</b>: I simplify complex IT workflows through architecture diagrams and flowcharts to ensure all stakeholders are aligned.
            </li>
            <li style={{ listStyleType: "none", paddingBottom: "15px", fontSize: "1.05rem", color: "#e2e2e2" }}>
              <ImPointRight style={{ color: "#19EAEE", marginRight: "10px" }} /> 
              <b className="purple">Operational Discipline</b>: I leverage tools like ClickUp, Jira, and Power BI to drive data-driven decision-making and efficient resource scheduling.
            </li>
          </ul>

          <p style={{ color: "#19EAEE", textAlign: "center", marginTop: "20px", fontStyle: "italic", fontWeight: "500" }}>
            "Operational transparency, built through structured documentation, is the foundation of successful project delivery."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
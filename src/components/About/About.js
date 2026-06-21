import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { FaBriefcase, FaGraduationCap, FaAward, FaBuilding, FaSearchPlus } from "react-icons/fa";

// Placeholder image for certificates - replace with your actual assets later
import bachelor from "../../Assets/bachelor.jpg"; 
import hdit from "../../Assets/hdit.jpg";
import atacert from "../../Assets/Atacerti.jpg";

function About() {
  // --- UPGRADED SCROLL ANIMATION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Instantly forces the browser to calculate the new class
            requestAnimationFrame(() => {
              entry.target.classList.add("start-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      // rootMargin "-50px" ensures the animation triggers right as it enters the view
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } 
    );

    // Increased to 300ms to guarantee React has fully painted the DOM before we search
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        ".animated-element, .slide-in-left, .slide-in-right, .animated-icon, .staggered-card"
      );
      elements.forEach((el) => observer.observe(el));
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // --- MODAL STATE LOGIC ---
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({ title: "", issuer: "", details: [], image: null });

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setModalData(data);
    setShow(true);
  };

  // --- EDUCATION & CERTIFICATE DATA ---
  const bscData = {
    title: "B.Sc. (Honours) in Computer Science",
    issuer: "University of Northampton",
    highlight: "Awarded: First Class Honours",
    details: [
      "Dissertation: Real-time distributed systems and AI integration (Samwise Platform).",
      "Core Modules: Advanced Architecture, Cybersecurity Protocols, Modern Database Systems.",
      "Completed:  April 2026."
    ],
    image: bachelor 
  };

  const dipData = {
    title: "Higher Diploma in Infocomm Technology",
    issuer: "TMC Academy",
    highlight: "Awarded: High Distinction",
    details: [
      "Core Modules: IT Project Management, Cloud Computing, Object-Oriented Programming.",
      "Final Project: Mapped client requirements to technical delivery for a university portal (University of Sam).",
      "Completed: May 2024."
    ],
    image: hdit 
  };

  const googleData = {
    title: "Google Project Management",
    issuer: "Google",
    details: [
      "Comprehensive training in traditional and Agile project management lifecycles.",
      "Focus areas: Risk management, stakeholder communication, and strategic execution.",
      "Status: Expected Completion July 2026."
    ],
    image: null // Replace with your Coursera progress screenshot or badge
  };

  const atlassianData = {
    title: "Agile Project Management Professional",
    issuer: "Atlassian",
    details: [
      "Formal validation of empirical process control and Agile frameworks.",
      "Demonstrated proficiency in Jira and Confluence administration for team workflows.",
      "Issued: November 2025."
    ],
    image: atacert 
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        
        {/* 1. EXECUTIVE SUMMARY */}
        <Row style={{ justifyContent: "center", padding: "10px", marginTop: "20px" }} >
          <Col md={10} style={{ paddingBottom: "30px", animationDelay: '0.1s'  }} className="animated-element" >
            <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", textAlign: "center" }}>
              Professional <strong className="purple">Profile</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <Row>
          {/* 2. THE EXPERIENCE TIMELINE (Left Side - NO NESTED ANIMATIONS) */}
          <Col md={7} style={{ paddingBottom: "50px", paddingRight: "30px" }}>
            
            <h2 className="project-heading slide-in-left" style={{ textAlign: "left", marginBottom: "30px", animationDelay: '0.2s' }}>
              <FaBriefcase style={{ marginBottom: "5px", color: "#19EAEE" }} /> Operations <strong className="purple">Experience</strong>
            </h2>
            
            <div className="custom-timeline">
              {/* YOMA Group */}
              <div className="timeline-item slide-in-left" style={{ animationDelay: '0.3s' }}>
                <div className="timeline-dot"></div>
                <Card className="quote-card-view timeline-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}>Junior Project Coordinator</h4>
                      <span style={{ fontSize: "0.85rem", color: "#19EAEE", border: "1px solid #19EAEE", padding: "3px 8px", borderRadius: "20px" }}>09/2024 - 02/2025</span>
                    </div>
                    <p style={{ fontSize: "1rem", color: "#e2e2e2", fontWeight: "600" }}><FaBuilding style={{ marginRight: "5px" }}/> YOMA Group | Yangon, Myanmar</p>
                    <ul style={{ fontSize: "0.95rem", paddingLeft: "15px", textAlign: "left", color: "#ccd6f6" }}>
                      <li style={{ marginBottom: "8px" }}>Orchestrated multi-site IT project workflows across 40+ branches, utilizing ClickUp to track resources, manage vendors, and oversee physical asset deployments.</li>
                      <li style={{ marginBottom: "8px" }}>Drove stakeholder alignment by maintaining a strict, consistent habit of documenting comprehensive meeting minutes and action items during all cross-functional calls.</li>
                      <li style={{ marginBottom: "8px" }}>Acted as central liaison by adopting a visual-first communication approach, utilizing diagrams to translate complex IT requirements into clear plans.</li>
                      <li>Analyzed Power BI dashboards to generate data-driven status reports and coordinated DLP cybersecurity awareness training for 100+ staff.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>

              {/* HiSkyTech */}
              <div className="timeline-item slide-in-left" style={{ animationDelay: '0.4s' }}>
                <div className="timeline-dot"></div>
                <Card className="quote-card-view timeline-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}>Frontend Web Developer Intern</h4>
                      <span style={{ fontSize: "0.85rem", color: "#19EAEE", border: "1px solid #19EAEE", padding: "3px 8px", borderRadius: "20px" }}>07/2024 - 08/2024</span>
                    </div>
                    <p style={{ fontSize: "1rem", color: "#e2e2e2", fontWeight: "600" }}><FaBuilding style={{ marginRight: "5px" }}/> HiSkyTech | Pakistan (Remote)</p>
                    <ul style={{ fontSize: "0.95rem", paddingLeft: "15px", textAlign: "left", color: "#ccd6f6" }}>
                      <li style={{ marginBottom: "8px" }}>Developed responsive web applications utilizing React.js and Node.js within a rigorous Agile environment.</li>
                      <li style={{ marginBottom: "8px" }}>Championed empirical process control and value-driven development practices to align technical deliverables with project scope.</li>
                      <li>Implemented WebSockets to enable real-time system features, conducting thorough testing and independent research to resolve integration challenges.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>

              {/* Freelance */}
              <div className="timeline-item slide-in-left" style={{ animationDelay: '0.5s' }}>
                <div className="timeline-dot"></div>
                <Card className="quote-card-view timeline-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}>Guiding Teacher</h4>
                      <span style={{ fontSize: "0.85rem", color: "#19EAEE", border: "1px solid #19EAEE", padding: "3px 8px", borderRadius: "20px" }}>06/2017 - 07/2024</span>
                    </div>
                    <p style={{ fontSize: "1rem", color: "#e2e2e2", fontWeight: "600" }}><FaBuilding style={{ marginRight: "5px" }}/> Freelance | Yangon, Myanmar</p>
                    <ul style={{ fontSize: "0.95rem", paddingLeft: "15px", textAlign: "left", color: "#ccd6f6" }}>
                      <li style={{ marginBottom: "8px" }}>Provided targeted mentoring and strategic guidance to students, developing individualized roadmaps to achieve academic milestones.</li>
                      <li>Acted as a core advisor, translating complex educational requirements into manageable, step-by-step action plans to guide transitions.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>

          {/* 3. EDUCATION & CERTIFICATIONS (Right Side) */}
          <Col md={5}>
            <h2 className="project-heading slide-in-right" style={{ textAlign: "left", marginBottom: "30px", animationDelay: '0.3s' }}>
              <FaGraduationCap style={{ marginBottom: "5px", color: "#19EAEE" }} /> Education & <strong className="purple">Credentials</strong>
            </h2>

            {/* Clickable B.Sc. Card */}
            <Card 
              className="quote-card-view timeline-card slide-in-right clickable-card" 
              style={{ marginBottom: "25px", animationDelay: '0.4s' }}
              onClick={() => handleShow(bscData)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}>B.Sc. (Honours) in Computer Science</h5>
                  <span style={{ fontSize: "0.8rem", color: "#a5a5a5" }}>02/2025 - 04/2026</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#e2e2e2", fontWeight: "600", marginBottom: "10px" }}>University of Northampton | United Kingdom</p>
                
                <div style={{ color: "#FFD700", fontWeight: "bold", marginBottom: "5px" }}>★ First Class Honours</div>
                <p style={{ fontSize: "0.95rem", textAlign: "left", margin: 0, color: "#ccd6f6" }}>
                  Focus on advanced full-stack architecture, AI techniques, and cybersecurity. <br/><br/>
                  <FaSearchPlus style={{ color: "#19EAEE", marginRight: "5px" }}/> <em>Click to view transcript details</em>
                </p>
              </Card.Body>
            </Card>

            {/* Clickable Diploma Card */}
            <Card 
              className="quote-card-view timeline-card slide-in-right clickable-card" 
              style={{ marginBottom: "25px", animationDelay: '0.5s' }}
              onClick={() => handleShow(dipData)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}>Higher Diploma in Infocomm Technology</h5>
                  <span style={{ fontSize: "0.8rem", color: "#a5a5a5" }}>02/2023 - 05/2024</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#e2e2e2", fontWeight: "600", marginBottom: "10px" }}>TMC Academy | Singapore</p>
                
                <div style={{ color: "#FFD700", fontWeight: "bold", marginBottom: "5px" }}>★ High Distniction</div>
                <p style={{ fontSize: "0.95rem", textAlign: "left", margin: 0, color: "#ccd6f6" }}>
                  Core skills in IT Project Management and Cloud Computing. <br/><br/>
                  <FaSearchPlus style={{ color: "#19EAEE", marginRight: "5px" }}/> <em>Click to view transcript details</em>
                </p>
              </Card.Body>
            </Card>

            {/* Clickable Google Cert Card */}
            <Card 
              className="quote-card-view timeline-card slide-in-right clickable-card" 
              style={{ marginBottom: "25px", animationDelay: '0.6s' }}
              onClick={() => handleShow(googleData)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}><FaAward style={{ marginRight: "5px" }}/> Google Project Management</h5>
                  <span style={{ fontSize: "0.8rem", color: "#a5a5a5" }}>Exp. Jul 2026</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#e2e2e2", fontWeight: "600", marginBottom: "10px" }}>Google</p>
                <p style={{ fontSize: "0.95rem", textAlign: "left", margin: 0, color: "#ccd6f6" }}>
                  Actively advancing expertise in Agile frameworks, risk management, stakeholder communication, and executing strategic project lifecycles. <br/><br/>
                  <FaSearchPlus style={{ color: "#19EAEE", marginRight: "5px" }}/> <em>Click to view certificate details</em>
                </p>
              </Card.Body>
            </Card>

            {/* Clickable Atlassian Cert Card */}
            <Card 
              className="quote-card-view timeline-card slide-in-right clickable-card" 
              style={{ animationDelay: '0.7s' }}
              onClick={() => handleShow(atlassianData)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 style={{ color: "#19EAEE", fontWeight: "bold", margin: 0 }}><FaAward style={{ marginRight: "5px" }}/> Agile PM Professional</h5>
                  <span style={{ fontSize: "0.8rem", color: "#a5a5a5" }}>Nov 2025</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#e2e2e2", fontWeight: "600", marginBottom: "10px" }}>Atlassian Certificate</p>
                <p style={{ fontSize: "0.95rem", textAlign: "left", margin: 0, color: "#ccd6f6" }}>
                  Formal validation of empirical process control, Agile frameworks, and Jira/Confluence administration. <br/><br/>
                  <FaSearchPlus style={{ color: "#19EAEE", marginRight: "5px" }}/> <em>Click to view certificate details</em>
                </p>
              </Card.Body>
            </Card>

          </Col>
        </Row>

        {/* 4. ARSENAL (TOOLS & TECH) */}
        {/* Parent wrapper NO LONGER animated to prevent hiding the children inside Toolstack/Techstack */}
        <div style={{ marginTop: "30px" }}>
          <h2 className="project-heading animated-element" style={{ animationDelay: '0.1s' }}>
            Project Operations <strong className="purple">Arsenal</strong>
          </h2>
          {/* Toolstack handles its own staggered animations internally! */}
          <Toolstack />
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2 className="project-heading animated-element" style={{ animationDelay: '0.1s' }}>
            Technical <strong className="purple">Foundations</strong>
          </h2>
          {/* Techstack handles its own staggered animations internally! */}
          <Techstack />
        </div>

      </Container>

      {/* --- THE CUSTOM MODAL --- */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="custom-modal">
        <Modal.Header closeButton style={{ borderBottom: "1px solid rgba(25, 234, 238, 0.2)", backgroundColor: "#0c0513" }}>
          <Modal.Title style={{ color: "#19EAEE", fontWeight: "bold" }}>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#0c0513", color: "#e2e2e2" }}>
          <div className="text-center mb-4">
    <h5 style={{ color: "#a5a5a5" }}>{modalData.issuer}</h5>
    {/* Display Highlight in Modal */}
    {modalData.highlight && (
      <div style={{ 
        display: "inline-block", 
        padding: "5px 15px", 
        backgroundColor: "rgba(255, 215, 0, 0.1)", 
        color: "#FFD700", 
        border: "1px solid #FFD700", 
        borderRadius: "20px", 
        marginTop: "10px",
        fontWeight: "bold" 
      }}>
        {modalData.highlight}
      </div>
    )}
  </div>
  
  <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#ccd6f6" }}>
    {modalData.details.map((detail, index) => (
      <li key={index}>{detail}</li>
    ))}
  </ul>

          {/* Only render the image container if an image exists */}
          {modalData.image && (
            <div style={{ textAlign: "center", border: "1px solid rgba(25, 234, 238, 0.3)", borderRadius: "8px", overflow: "hidden", padding: "10px", backgroundColor: "rgba(20, 15, 35, 0.6)" }}>
              <img src={modalData.image} alt="Credential Document" style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "1px solid rgba(25, 234, 238, 0.2)", backgroundColor: "#0c0513" }}>
          <Button variant="outline-info" onClick={handleClose} style={{ borderColor: "#19EAEE", color: "#19EAEE" }}>
            Close Document
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}

export default About;
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Import your actual PDF file here! Ensure the path matches your project structure.
import pdf from "../../Assets/san_shwe.pdf";

function Home2() {
  const navigate = useNavigate();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        
        {/* --- STAGGERED DASHBOARD SECTION --- */}
        <Row style={{ paddingBottom: "4rem", justifyContent: "center" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", marginBottom: "40px", textAlign: "center", color: "white" }}>
              Explore My <span className="purple">Expertise</span>
            </h1>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card onClick={() => navigate('/project')} className="project-card-view h-100 text-center p-4 dashboard-card staggered-card d-flex flex-column" style={{ animationDelay: '0.1s', cursor: 'pointer' }}>
              <h4 style={{ color: "#19EAEE", fontWeight: "bold" }}>📊 Case Studies</h4>
              
              {/* Mini Kanban Animation */}
              <div className="mini-kanban mb-3">
                <div className="mk-col"></div>
                <div className="mk-col mk-active"></div>
                <div className="mk-col"></div>
                <div className="mk-card"></div>
              </div>

              <p style={{ color: "white", marginTop: "15px", fontSize: "0.95rem" }}>Technical projects managed from scope to delivery.</p>
              
              {/* ADDED: Sneak Peek to balance the card heights */}
              <div className="sneak-peek" style={{ marginTop: "auto", paddingTop: "15px", borderTop: "1px solid rgba(25, 234, 238, 0.2)", textAlign: "left" }}>
  <p style={{ margin: 0, fontSize: "0.85rem", color: "#ccd6f6", lineHeight: "1.6" }}>
    <span style={{ color: "#19EAEE" }}>★</span> <strong>Samwise:</strong> AI-Enhanced PM Tool<br/>
    <span style={{ color: "#19EAEE" }}>★</span> <strong>UOS Portal:</strong> University Systems
  </p>
</div>
            </Card>
          </Col>
          
          {/* --- SECOND CARD: PROFESSIONAL PROFILE --- */}
          <Col md={4} className="mb-4">
            <Card onClick={() => navigate('/about')} className="project-card-view h-100 text-center p-4 dashboard-card staggered-card d-flex flex-column" style={{ animationDelay: '0.3s', cursor: 'pointer' }}>
              <h4 style={{ color: "#19EAEE", fontWeight: "bold" }}>💼 Professional Profile</h4>
              
              {/* Mini Timeline Animation */}
              <div className="mini-timeline mb-3">
                <div className="mt-node"></div>
                <div className="mt-line"></div>
                <div className="mt-node"></div>
                <div className="mt-line"></div>
                <div className="mt-node"></div>
              </div>

              <p style={{ color: "white", marginTop: "15px", fontSize: "0.95rem" }}>Experience, Education, and Technical Arsenal.</p>
              <div className="sneak-peek" style={{ marginTop: "auto", paddingTop: "15px", borderTop: "1px solid rgba(25, 234, 238, 0.2)", textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#ccd6f6", lineHeight: "1.6" }}>
                  <span style={{ color: "#19EAEE" }}>★</span> <strong>B.Sc (Hons)</strong> Computer Science<br/>
                  <span style={{ color: "#19EAEE" }}>★</span> <strong>Operations:</strong> Multi-site Workflows
                </p>
              </div>
            </Card>
          </Col>

          {/* --- THIRD CARD: RESUME & CONNECT --- */}
          <Col md={4} className="mb-4">
            <Card onClick={() => navigate('/resume')} className="project-card-view h-100 text-center p-4 dashboard-card staggered-card d-flex flex-column" style={{ animationDelay: '0.5s', cursor: 'pointer' }}>
              <h4 style={{ color: "#19EAEE", fontWeight: "bold" }}>📬 Resume & Connect</h4>
              
              {/* Mini Document Animation */}
              <div className="mini-document mb-3">
                <div className="md-file"></div>
                <div className="md-tray"></div>
              </div>

              <p style={{ color: "white", marginTop: "15px", fontSize: "0.95rem" }}>Download my full dossier and let's talk timelines.</p>
              
              {/* DIRECT DOWNLOAD BUTTON */}
              <div className="mt-auto pt-3">
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ 
                    backgroundColor: "transparent", 
                    color: "#19EAEE", 
                    fontWeight: "600", 
                    border: "1px solid #19EAEE",
                    borderRadius: "8px",
                    padding: "8px 20px",
                    width: "100%",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(25, 234, 238, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                  onClick={(e) => e.stopPropagation()} 
                >
                  <AiOutlineDownload style={{ marginRight: "5px", fontSize: "1.2rem" }} /> Quick Download
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* --- SOCIAL LINKS & CONTACT SECTION --- */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            {/* --- DIRECT CONTACT INFO --- */}
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", marginBottom: "25px" }}>
              <a 
                href="mailto:sanxhwe@gmail.com" 
                style={{ color: "#e2e2e2", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => e.target.style.color = "#19EAEE"}
                onMouseLeave={(e) => e.target.style.color = "#e2e2e2"}
              >
                <FaEnvelope style={{ color: "#19EAEE", marginRight: "8px", marginBottom: "3px" }} /> 
                sanxhwe@gmail.com
              </a>
              
              <a 
                href="tel:+6584164808" 
                style={{ color: "#e2e2e2", textDecoration: "none", fontSize: "1.1rem", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => e.target.style.color = "#19EAEE"}
                onMouseLeave={(e) => e.target.style.color = "#e2e2e2"}
              >
                <FaPhoneAlt style={{ color: "#19EAEE", marginRight: "8px", marginBottom: "3px" }} /> 
                +65 8416 4808
              </a>
            </div>

            <ul className="home-about-social-links">
              <li className="social-icons"><a href="https://github.com/Sam-mx" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiFillGithub /></a></li>
              <li className="social-icons"><a href="https://x.com/sanxhwe?s=21" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiOutlineTwitter /></a></li>
              <li className="social-icons"><a href="https://www.linkedin.com/in/san-shwe-sam-564a32169/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><FaLinkedinIn /></a></li>
              <li className="social-icons"><a href="https://www.instagram.com/san_xhwe/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiFillInstagram /></a></li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home2;
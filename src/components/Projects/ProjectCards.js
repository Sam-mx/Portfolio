import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsDiagram3, BsFileText } from "react-icons/bs"; // Added BsFileText
import DiagramModal from "./DiagramModal";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view h-100 d-flex flex-column">
        <Card.Img 
  variant="top" 
  src={props.imgPath} 
  alt="card-img" 
  style={{ 
    height: "320px", 
    objectFit: "contain", // Ensures the full image is visible
    backgroundColor: "#0b0e14", // Matches your card background
    padding: "10px" // Adds a nice buffer around images
  }} 
/>
        
        <Card.Body className="d-flex flex-column">
          <div style={{ color: "#19EAEE", fontSize: "0.75rem",  fontWeight: "bold", textTransform: "uppercase" }}>
            {props.category}
          </div>
          
          <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
          
          <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem", flexGrow: 1 }}>
            {props.description}
          </Card.Text>

          {props.pmHighlights && (
            <div className="mb-3" style={{ fontSize: "0.85rem", color: "#ccd6f6", textAlign: "left" }}>
              <strong>PM Insights:</strong>
              <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
                {props.pmHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Unified Button Layout */}
          <div className="mt-auto pt-3 d-flex flex-column gap-2">
            {/* Top Row: GitHub and Demo */}
            <div className="d-flex gap-2">
              <Button className="flex-fill" variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> GitHub
              </Button>
              {!props.isBlog && props.demoLink && (
                <Button className="flex-fill" variant="primary" href={props.demoLink} target="_blank">
                  <CgWebsite /> Demo
                </Button>
              )}
            </div>

            {/* Bottom Row: Mental Map and System Manual side-by-side if both exist, or one if not */}
            <div className="d-flex gap-2">
              {props.diagrams && (
                <Button className="flex-fill" variant="primary" onClick={() => setShow(true)}>
                  <BsDiagram3 /> View Architecture
                </Button>
              )}
              {props.manualLink && (
                <Button className="flex-fill" variant="primary" href={props.manualLink} target="_blank">
                  <BsFileText /> System Manual
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>

      {props.diagrams && (
        <DiagramModal 
          show={show} 
          handleClose={() => setShow(false)} 
          diagramTitle={props.title + " - System Diagrams"} 
          diagrams={props.diagrams} 
        />
      )}
    </>
  );
}

export default ProjectCards;
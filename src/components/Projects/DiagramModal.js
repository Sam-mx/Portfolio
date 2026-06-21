import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";

function DiagramModal({ show, handleClose, diagramTitle, diagrams }) {
  const [index, setIndex] = useState(0);

  if (!diagrams || !Array.isArray(diagrams)) {
    return null;
  }

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      size="lg" 
      centered 
      className="dark-modal"
    >
      {/* Dark Theme Modal Style */}
      <style type="text/css">{`
        .modal-content {
          background-color: #0b0e14 !important;
          color: white;
          border: 1px solid #19EAEE;
        }
        
        /* Fixes the close button color */
        .btn-close {
          filter: invert(1) grayscale(100%) brightness(200%);
          background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ff0000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat !important;
          opacity: 0.8;
        }
        
        .btn-close:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .carousel-indicators button {
          background-color: #19EAEE !important;
        }
      `}</style>

      <Modal.Header closeButton className="border-bottom border-info">
        <Modal.Title style={{ color: "#19EAEE" }}>{diagramTitle}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Carousel 
          activeIndex={index} 
          onSelect={(i) => setIndex(i)} 
          interval={null}
          indicators={true}
        >
          {diagrams.map((d, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={d.src} alt={d.label} />
              {/* Removed default caption box; label displayed below instead */}
              <div className="text-center pt-3" style={{ color: "#19EAEE", fontWeight: "bold" }}>
                {d.label}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default DiagramModal;
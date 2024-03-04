import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">San Shwe </span>
            from <span className="purple"> Yangon, Myanmar.</span>
            <br />
            You can call me <span className="purple">Sam.</span>
            <br />
            I'm recently graduated with a Higher Diploma of Infocomm Technology from British University College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "#ADD8E6" }}>
            "Make it work, make it right, make it fast!"{" "}
          </p>
          <footer className="blockquote-footer">Sam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

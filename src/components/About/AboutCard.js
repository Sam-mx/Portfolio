import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi everyone, I'm <b className="purple">San Shwe</b>, or <b className="purple">Sam</b> for short. I'm a passionate <b className="purple">IT professional</b> from <b className="purple">Yangon, Myanmar</b>. I recently graduated from TMC Academy in Singapore with a Higher Diploma in Infocomm Technology.
          <br/>
          <br/>
          I'm skilled in <b className="purple">web development</b>, particularly with <b className="purple">JavaScript, React.js,</b> and <b className="purple">Next.js</b>. I'm also proficient in <b className="purple">project management</b>, utilizing tools like <b className="purple">ClickUp</b> and <b className="purple">Microsoft Project</b> to deliver projects efficiently.
          <br/>
          <br/>

          Beyond coding, I enjoy sharing knowledge as a tutor and exploring new cultures through travel. Gaming also helps me relax and stay sharp.
          
          </p>
         
          

          <p style={{ color: "#ADD8E6" }}>
            "Let's connect and build something great together!"{" "}
          </p>
          <footer className="blockquote-footer">Sam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

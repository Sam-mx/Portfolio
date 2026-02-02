import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone, I'm <b className="purple">San Shwe</b> (or <b className="purple">Sam</b>). I am a <b className="purple">Computer Science Graduate</b> and <b className="purple">Project Operations Specialist</b> based in Singapore. Currently, I am finalizing my B.Sc. (Honours) in Computing from the <b className="purple">University of Northampton</b>, focusing on advanced system architecture and AI.
    <br />
    <br />
    My professional edge lies in my ability to <b className="purple">bridge the gap</b> between code and coordination.
  </p>

  <ul>
    <li style={{ listStyleType: "none", paddingBottom: "10px" }}>
       <ImPointRight /> <b className="purple">Technically</b>, I am a Full-Stack Developer skilled in <b className="purple">JavaScript, React.js, and Next.js</b>, building scalable web applications with real-time features.
    </li>
    <li style={{ listStyleType: "none", paddingBottom: "10px" }}>
       <ImPointRight /> <b className="purple">Operationally</b>, I am an experienced Project Coordinator. I utilize tools like <b className="purple">ClickUp</b> and <b className="purple">Microsoft Project</b> to streamline workflows, while leveraging <b className="purple">Power BI</b> for data-driven decisions and implementing <b className="purple">DLP protocols</b> for security.
    </li>
  </ul>

  <p style={{ textAlign: "justify" }}>
    Beyond the screen, I am passionate about <b className="purple">education and exploration</b>. My background as a tutor keeps me grounded in continuous learning, while my love for travel fuels my adaptability to diverse cultures. When I'm not coding or managing projects, you can find me gaming—keeping my strategic thinking sharp even while unwinding.
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

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi everyone, I'm <b className="purple">San Shwe</b>, or <b className="purple">Sam</b> for short. I'm a passionate <b className="purple">IT professional</b> hailing from <b className="purple">Yangon, Myanmar</b>. Currently, I'm dedicated to expanding my knowledge and skills through the Bachelor of Science (Honours) in Computing Top-up program at Amity Global Institute (AGI) in Singapore. This academic pursuit is a key focus in my professional development.
          <br/>
          <br/>
          My core expertise lies in <b className="purple">web development</b>, where I'm particularly skilled in utilizing <b className="purple">JavaScript, React.js,</b> and <b className="purple">Next.js</b>. I'm also well-versed in <b className="purple">project management</b>, utilizing tools like <b className="purple">ClickUp</b> and <b className="purple">Microsoft Project</b> to deliver projects efficiently. These skills allow me to effectively manage and execute IT projects.
          <br/>
          <br/>

          Beyond my technical pursuits, I find fulfillment in sharing knowledge as a tutor. I also have a strong passion for exploring diverse cultures through travel. To unwind and maintain mental agility, I enjoy gaming. These activities provide a valuable balance to my professional and academic life.
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

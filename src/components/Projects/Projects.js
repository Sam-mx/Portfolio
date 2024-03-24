import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import unviersity from "../../Assets/Projects/university.png";
import tennis_club from "../../Assets/Projects/tennis_club.png";
import chat from "../../Assets/Projects/chat.png";
import rental from "../../Assets/Projects/rental.png";
import todo from "../../Assets/Projects/to_do_list.png";
import dictionary from "../../Assets/Projects/dictionary.png";
import weather from "../../Assets/Projects/weather.png";
import movie from "../../Assets/Projects/movie.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import recipe from "../../Assets/Projects/recipe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unviersity}
              isBlog={false}
              title="University of Sam"
              description="Responsive Web Page for my Final Project of the higher diploma. I used HTML, CSS, JavaScript, PHP, Bootstrap, and
              DataTables API to construct a very user-friendly and simple university website with
              two portals, staff and student portals, in response to the client’s requirement."
              ghLink="https://github.com/Sam-mx/Responsive_University_Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tennis_club}
              isBlog={false}
              title="Tennis Club"
              description="A University's Tennis Club where users can learn about details about this club.They can also view and register for the upcoming events. An administrator can view, insert, update, and delete those applicants. This was for my Web Programming Assignment."
              ghLink="https://github.com/Sam-mx/Tennis_Club_Assignment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real Time Chat Application"
              description="A MERN Stack Project with Building and Deploying a Real Time Chat App | JWT, Socket.io.
              🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
              🎃 Authentication && Authorization with JWT
              👾 Real-time messaging with Socket.io
              🚀 Online user status (Socket.io and React Context)
              👌 Global state management with Zustand"
              ghLink="https://github.com/Sam-mx/chat-app-react"
              demoLink="https://chat-application-sam.onrender.com"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Sam eCommerce"
              description="Build and Deploy a Responsive Full Stack E-Commerce App with an Admin Dashboard & CMS in 2024 | Next 14, Stripe.
              🌟 Using Next.js and PayloadCMS to understand the CMS
              🎃 Using MongoDB for the backend development
              🚀 Only 7 Days Trial for the Demo Mode But still rendering it"
              ghLink="https://github.com/Sam-mx/sam-ecommerce"
              demoLink="https://sam-ecommerce.payloadcms.app/"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Sam Movies"
              description="A straightforward, API-powered movie application that is responsive and lets users search for and discover the newest TV series and films along with cast and movie details. Additionally, they can view their trailers.🌟 Tech stack: 🚀 REACT +  🎐 Axio  + ☂️ SCSS"
              ghLink="https://github.com/Sam-mx/Movie-Application-React"
              demoLink="https://sam-movies.vercel.app/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="A simple weather forecasting application that allows users to type in their city and see the weather for the next week, including wind speed, humidity, and heat index. 🌟 Tech stack: 🚀 REACT +  🎐 Axio  + ☂️ TailwindCSS"
              ghLink="https://github.com/Sam-mx/Weather-Application-React"
              demoLink="https://sam-weather-app.vercel.app"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Sam's Recipe Finder"
              description="A web application on a single page that lets users search recipes with specific queries.
               Using 🌟style-components
              🎃 axios, 🚀 react-scripts
              👾 material-ui@mui"
              ghLink="https://github.com/Sam-mx/Recipe-Finder-React"
              demoLink="https://sam-recipe.vercel.app/"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To do List"
              description="A straightforward to-do list that is highly helpful for individuals like me who enjoy taking copious notes before acting on things. ReactJS was the framework I used to construct this."
              ghLink="https://github.com/Sam-mx/Todo-List_react"
              demoLink="https://sam-todo.vercel.app"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dictionary}
              isBlog={false}
              title="Wordictionary"
              description="This is one of the project that I keep developing in my 7 days challenge.  A Word dictionary , where you can search for meaning, pronounciation, example (use of that word in sentences) of millions of words and also bookmark the words for future references."
              ghLink="https://github.com/Sam-mx/7-days-Challenge/tree/main/Dictionary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="RentalU"
              description="RentalU Application using SQLite Database to do INSERT, UPDATE, DELETE, READ QUERY For Assignment. It is using Java language to develop an android application. It's about an application for renting apartments, where tenants can list the details of their units. "
              ghLink="https://github.com/Sam-mx/RentalU_Andriod"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

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
import AI from "../../Assets/Projects/AI-image.png";
import Samverse from "../../Assets/Projects/samverse.png";
import samcrypto from "../../Assets/Projects/sam_crypto.png";
import expense from "../../Assets/Projects/expense.png";
import game from "../../Assets/Projects/sam-game.png";
import tic_tac from "../../Assets/Projects/tic-tac.png";
import travel from "../../Assets/Projects/travel.png";
import nike from "../../Assets/Projects/nike.png";
import brainwave from "../../Assets/Projects/brainwave.png";
import nasa from "../../Assets/Projects/nasa.png"
import terra from "../../Assets/Projects/terradisam.png"

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
              imgPath={game}
              isBlog={false}
              title="Sam Game Portal"
              description="A web application that allows users to search for games based on genres, platforms, release dates, and ratings. It provides a convenient way to explore and find games that match your preferences. Features: 
              🌟 Search for games by genre, platform, release date, and rating
              🎃 Sort search results by popularity, release date, or rating.
              🚀 User-friendly interface for easy navigation."
              ghLink="https://github.com/Sam-mx/Game-Portal"
              demoLink="https://sam-game-portal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title="AI Image Generation App"
              description="A MERN Stack Project with Building and Deploying an AI Image Generation App.
              🌟 Tech stack: MERN +  TailwindCSS + openAI API
              👾 Since it's the paid API, the daily image generation is limited.
              🚀 Can Create an image as a DALL-E after you paid the API.
              👌 Here, I'm only experimenting with the logic; I'm not paying the API. Therefore, I don't deploy on the render."
              ghLink="https://github.com/Sam-mx/AI-Image-Generation-App"     
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
              🚀 Since the trial mode is ended, there's no demo mode."
              ghLink="https://github.com/Sam-mx/sam-ecommerce"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terra}
              isBlog={false}
              title="Terra di Sam"
              description="Built with React.js, and JavaScript, this landing page not only looks great but also serves as a hands-on project to reinforce one's understanding of these technologies. Features:
              🌟 Responsive Layout
              🎃 Recipe Section
              🚀 Review Section
              👉 Styled Components
              🤖 Centered Content
              ⚙️ Consistent Design"
              ghLink="https://github.com/Sam-mx/Terra-di-Sam" 
              demoLink="https://terra-di-sam.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Sam Travel Application"
              description="Built with Next.js, TailwindCSS, and TypeScript, this landing page not only looks great but also serves as a hands-on project to reinforce one's understanding of these technologies. Features:
              🌟 Appealing Hero Section
              🎃 Camp Exploration Section
              🚀 Engaging Travel Guide Section
              👉 Feature-Rich Section
              🤖 Call to Action for Mobile Apps
              ⚙️ Footer"
              ghLink="https://github.com/Sam-mx/Travel-App" 
              demoLink="https://sam-travel.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainwave}
              isBlog={false}
              title="Brainwave Clone"
              description="Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general. Features:
              🌟 Beautiful Sections
              🎃 Parallax Animations
              🚀 Complex UI Geometry
              👉 Latest UI Trends
              🤖 Cool Gradients
              👾 Responsive"
              ghLink="https://github.com/Sam-mx/Brainwave-Clone" 
              demoLink="https://sam-brainwave.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              isBlog={false}
              title="Nike Clone"
              description="Built with React.js, TailwindCSS, and JavaScript, this is a Responsive landing page. Features:
              🌟 Complex Hero Section
              🎃 Popular Products Showcase
              🚀 About Us Section
              👉 Special Offers
              🤖 Testimonials
              👾 Newsletter Integration
              ⚙️ Footer"
              ghLink="https://github.com/Sam-mx/Nike" 
              demoLink="https://sam-nike.vercel.app/"     
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
              imgPath={expense}
              isBlog={false}
              title="Sam's Expense Tracker"
              description="It's a Webapp that can be used to keep track of all incomes and expenses so that you never have to wonder where you spent all your hard earned money!
               Using 🌟React.js
              🎃 JavaScript, 🚀 CSS
              👾 MaterialUI"
              ghLink="https://github.com/Sam-mx/Sam-Expense-Tracker"
              demoLink="https://sam-expense.vercel.app/"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="Sam's Nasa Application"
              description="It's a ReactJS Application that is used with NASA OPEN API to read the updated informations.
               Using 🌟React.js
              🎃 JavaScript, 🚀 CSS
              👾 NASA API"
              ghLink="https://github.com/Sam-mx/Nasa-React"
              demoLink="https://sam-nasa-react.netlify.app/"         
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
              imgPath={samcrypto}
              isBlog={false}
              title="Sam's Crypto Currency App"
              description="It's an application which allows you to search for coins and view the price of cryptocurrency.
               Using 🌟React.js
              🎃 CSS3, 🚀 axios
              👾 CoinGecko API"
              ghLink="https://github.com/Sam-mx/Crypto-App-React"
              demoLink="https://sam-crypto.vercel.app/"         
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
              imgPath={tic_tac}
              isBlog={false}
              title="Sam's Tic-Tac-Toe"
              description="It's a straightforward online game. This game is playable by two people.
               Using 🌟React.js
              🎃 CSS3, 🚀 SCSS
              👾 Framer-motion"
              ghLink="https://github.com/Sam-mx/React-Tic-Tac-Toe"
              demoLink="https://sam-tic-tac-toe.vercel.app/"         
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Samverse}
              isBlog={false}
              title="Samverse"
              description="Building a COMPLETE Fullstack Responsive Social 🌟MERN🌟 Application with Auth, Likes, Dark Mode | React, MongoDB, MUI. There's still no deployment for this application yet."
              ghLink="https://github.com/Sam-mx/Responsive-Social-App"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

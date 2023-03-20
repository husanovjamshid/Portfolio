import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import movie from "../../Assets/Projects/movie.jpg";
import book from "../../Assets/Projects/book.png";
import twitter from "../../Assets/Projects/twitter.png";

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
              imgPath={movie}
              isBlog={false}
              title="Movie Portal"
              
              ghLink="https://github.com/husanovjamshid/Movie-Portal-React"
              demoLink="https://movie-portal-uz.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Shop"
              
              ghLink="https://github.com/husanovjamshid/books-react"
              demoLink="https://book-shop.ogaw.uz/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Clone"
              
              ghLink="https://github.com/husanovjamshid/Twitter-Clone-React"
              demoLink="https://nt-twitter-clone.netlify.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

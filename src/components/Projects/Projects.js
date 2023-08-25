import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.webp";
import book from "../../Assets/Projects/book.png";
import twitter from "../../Assets/Projects/twitter.png";
import c1 from '../../Assets/Projects/c1plus.png'
import dom from '../../Assets/Projects/dom.webp'
import busines from '../../Assets/Projects/busines.png'
import iito from '../../Assets/Projects/iito.webp'
import uy from '../../Assets/Projects/uy.webp'

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
              imgPath={c1}
              isBlog={false}
              title="C1plus 0 dan C1 gacha"
              
              ghLink="https://github.com/husanovjamshid/c1plus.uz"
              demoLink="http://c1plus.uz/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uy}
              isBlog={false}
              title="Uy Joy Baraka (Demo)"
              
              ghLink="#"
              demoLink="https://uyjoybaraka.uz/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iito}
              isBlog={false}
              title="Test Platform (Farobiy IT Center)"
              
              ghLink="https://github.com/husanovjamshid/farobiy"
              demoLink="http://iito.uz/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Portal"
              
              ghLink="https://github.com/husanovjamshid/Movie-Portal-React"
              demoLink="https://kinolar.ogaw.uz/"
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
              imgPath={dom}
              isBlog={false}
              title="Kvartira (Startup)"
              
              ghLink="https://github.com/husanovjamshid/Apartments-Frontend"
              demoLink="https://nt-home.netlify.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busines}
              isBlog={false}
              title="Business site"
              
              ghLink="https://github.com/husanovjamshid/Businesuz"
              demoLink="https://businesuz.netlify.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

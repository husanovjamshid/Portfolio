import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {  SiNextdotjs, SiCss3, SiTypescript, SiPostgresql, SiNestjs } from "react-icons/si";
import { SiMui, SiTailwindcss, SiRedux } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiSass } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h4>TypeScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h4>Redux</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h4>Next.js</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node JS</h4>
      </Col>
			<Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <h4>Nest.js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h4>PostgreSQL</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
        <h4>Material UI</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h4>Tailwind </h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrap />
        <h4>Bootstrap</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <h4>Sass</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h4>Css</h4>
      </Col>

     
    </Row>
  );
}

export default Techstack;

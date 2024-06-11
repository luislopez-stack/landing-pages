import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/dentista.png";
import emotion from "../../Assets/Projects/docdentista.png";
import editor from "../../Assets/Projects/raiz.png";
import chatify from "../../Assets/Projects/diente-limpio.png";
import suicide from "../../Assets/Projects/ortodoncia.png";
import bitsOfCode from "../../Assets/Projects/herramientasden.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recientes <strong className="purple">Tratamientos </strong>
        </h1>
        <p style={{ color: "black" }}>
          Aqui un poco de los trabajos que podras realizarte.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blanqueamiento Estético Dental"
              description="El blanqueamiento es un procedimiento que aclara los dientes que están manchados, decolorados o que se han oscurecido.
              El procedimiento se lleva a cabo en el consultorio dental y toma de treinta minutos a una hora en una sola sesión."
              ghLink="/about"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Endodoncia Dental"
              description="La endodoncia sirve para conservar las piezas dentales sin la necesidad de recurrir a la por extracción del diente. 
              Es el último recurso para conservar aquellas piezas que tienen alguna afección en el nervio (pulpa) dental y su periferia."
              ghLink="/about"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Resinas de Estetica"
              description="Las resinas de alta estética es una solución para corregir: pequeñas imperfecciones, fracturas menores, caries, 
              alteraciones de color, formas inadecuadas, dientes pequeños"
              ghLink="/about"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Carillas Dentales"
              description="Las carillas dentales son unas capas delgadas de porcelana hechas a la medida, que cubren la parte frontal de los dientes. 
              Las carillas dentales, son del color del diente y se utilizan para cerrar espacios entre dientes, dientes manchados, mala formación o ligeramente chuecos."
              ghLink="/about"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ortodoncia"
              description="Para los dientes desalineados; en dónde los dientes se colocan en su posición adecuada, para así lograr su correcta función. 
              Existen varios tipos de tratamientos de ortodoncia, tales como: brackets metálicos, estéticos, sin ligas e incluso sistemas totalmente transparentes."
              ghLink="/about"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Peridoncia Dental"
              description="Un cuidado deficiente de las encías puede derivar en patologías como el sarro, gingivitis o la periodontitis, causando 
              inflamación y provocando sangrado y puedes llegar a perder los dientes si no la combates a tiempo."
              ghLink="/about"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

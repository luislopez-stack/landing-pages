import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/homeImg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              CONOCE SOBRE<span className="purple"> DENTAL </span> 
            </h1>
            <p className="home-about-body">
            Especializados en tratamientos dentales correctivos y estéticos, preocupados por el bienestar y 
            la salud de la sociedad mexicana, ofrecemos alternativas con tecnología de punta para garantizar la calidad de nuestro servicio.
              <br />
              <br />Todos nuestros tratamientos y servicios se brindan en  
              <i>
                <b className="purple"> cómodas instalaciones </b>
              </i>
              <br />
              <br />
              Tratamientos con los más altos&nbsp;
              <i>
                <b className="purple">estándares de calidad. </b>
                y{" "}
                <b className="purple">
                  atencion.
                </b>
              </i>
              <br />
              <br />
              Pasion por mejorar la salud bucal de nuestros  <b className="purple">pacientes</b> en
              <i>
                <b className="purple">
                  {" "}
                  blanqueamientos, endodoncia
                </b>
              </i>
              &nbsp; etc.
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>NAVEGA</h1>
            <p>
              Tambien <span className="purple">encuentrame </span>como
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

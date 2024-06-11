import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, nos puedes enontrarnos en <span className="purple">Av. direccion </span>
            en <span className="purple"> Aguascalientes.</span>
            <br />
            Recuerda que el equipo esta siempre atento a whatsapp en nuestro horario corporativo.
            <br />
            Podras enviar tus dudas o solicitudes, escribenos directamente! Te invitamos a que vivas la experiencia.
            <br />
            <br />
            Reserva una cita y conocenos!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contactanos
            </li>
            <li className="about-activity">
              <ImPointRight /> Reserva una cita
            </li>
            <li className="about-activity">
              <ImPointRight /> Mejora tu salud bucal
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esfuérzate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
<<<<<<< HEAD
          <h3>Designed and Developed by Soumyajit Behera</h3>
=======
          <h3>Designed and Developed by Yasuhiro Inoue</h3>
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
<<<<<<< HEAD
                href="https://github.com/soumyajit4419"
=======
                href="https://github.com/happydev0105"
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
<<<<<<< HEAD
            <li className="social-icons">
=======
            {/* <li className="social-icons">
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
<<<<<<< HEAD
            </li>
=======
            </li> */}
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
<<<<<<< HEAD
            <li className="social-icons">
=======
            {/* <li className="social-icons">
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
<<<<<<< HEAD
            </li>
=======
            </li> */}
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e

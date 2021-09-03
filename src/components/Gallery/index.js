import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  const url =
    "https://neplych.com/wp-content/uploads/2020/07/Timro-Mero-Sath-Lyrics-Pramod-Kharel-Prabisha-Adhikari-1024x576.jpg?x16286";
  return (
    <Container fluid className="p-3 gallery__container" id="gallery">
      <Row>
        <Col md="12" className="text-center">
          <h1>Gallery</h1>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Row className="p-4">
            <Col md="4">
              <img src={url} className="img-fluid mb-4 gallery" alt="" />
            </Col>
            <Col md="4">
              <img src={url} className="img-fluid mb-4 gallery" alt="" />
            </Col>
            <Col md="4">
              <img src={url} className="img-fluid mb-4 gallery" alt="" />
            </Col>
            <Col md="4">
              <img
                src={url}
                className="img-fluid md-mb-0 mb-4 gallery"
                alt=""
              />
            </Col>
            <Col md="4">
              <img
                src={url}
                className="img-fluid md-mb-0 mb-4 gallery"
                alt=""
              />
            </Col>
            <Col md="4">
              <img src={url} className="img-fluid mb-4 gallery" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;

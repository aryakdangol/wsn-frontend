import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  const url =
    "https://neplych.com/wp-content/uploads/2020/07/Timro-Mero-Sath-Lyrics-Pramod-Kharel-Prabisha-Adhikari-1024x576.jpg?x16286";
  return (
    <Container fluid className="p-5" id="gallery">
      <Row>
        <Col md="12" className="text-center">
          <h1>Gallery</h1>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Row className="p-5">
            <Col md="4">
              <img src={url} className="img-fluid mb-5 gallery" alt="" />
              <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md="4">
              <img src={url} className="img-fluid mb-5 gallery" alt="" />
            </Col>
            <Col md="4">
              <img src={url} className="img-fluid mb-5 gallery" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;

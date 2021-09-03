import React, { useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../Sidebar";
import Login from "../Login";
import Background from "../Login/background";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const url =
    "https://neplych.com/wp-content/uploads/2020/07/Timro-Mero-Sath-Lyrics-Pramod-Kharel-Prabisha-Adhikari-1024x576.jpg?x16286";

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [Clicked, setOpen] = useState(false);

  const Open = () => {
    setOpen(!Clicked);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Login Clicked={Clicked} Open={Open} />
      <Background Clicked={Clicked} Open={Open} />
      <Navbar toggle={toggle} Open={Open} />
      <Container>
        <Form.Select className=" mb-2 mt-4">
          {/*           <option>Choose your location</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option> */}
        </Form.Select>
      </Container>
      <Container fluid>
        <Row xs={2} sm={2} md={3} lg={4}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <Card className="img-fluid mb-2 mt-4">
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>Timro mero sath</Card.Title>
                  <InputGroup className="mb-2">
                    <Form>
                      <Form.Check type="checkbox" label="Pay for courier" />
                      <Form.Check type="checkbox" label="Pay for laundary" />
                    </Form>
                  </InputGroup>
                  <Col>
                    <Button type="submit">Buy</Button>{" "}
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Login from "../Login/Login";
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
import Select from "react-select";
import LoggedNav from "../navbar/LoggedNav";
import axios from "axios";
import url from "../../url";

const Products = () => {
  const [products, setProducts] = useState([]);

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    var base64Flag = "data:image/jpeg;base64,";
    var imageStr = window.btoa(binary);
    var img = base64Flag + imageStr;
    return img;
  }

  useEffect(() => {
    axios
      .get(`${url}/product`)
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  /*   const url =
    "https://www.seekpng.com/png/full/117-1179653_donate-icon-life-value-icon.png"; */

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [Clicked, setOpen] = useState(false);
  const Open = () => {
    setOpen(!Clicked);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [Choose, setChoose] = useState(false);
  const Show = () => {
    setChoose(!Choose);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/*     <Login Clicked={Clicked} Open={Open} /> */}
      <Background Clicked={Clicked} Open={Open} />
      <LoggedNav />
      <Container className="mt-4 ">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Select options={options} placeholder="Search location" />
            {/* <Form.Select className=" mb-2 mt-4">
          <option>Choose your location</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row xs={2} sm={2} md={3} lg={4}>
          {/*       {Array.from({ length: 8 }).map((_, idx) => ( */}
          {products.map((product) => (
            <Col key={product._id}>
              <Card className="img-fluid mb-2 mt-4">
                <Card.Img
                  variant="top"
                  src={arrayBufferToBase64(product.image.data)}
                />
                <Card.Body key={product._id}>
                  <Card.Title>{product.name}</Card.Title>
                  {Choose ? (
                    <InputGroup className="mb-2" key={product._id}>
                      <Form>
                        <Form.Check type="checkbox" label="Pay for courier" />
                        {product.material_type === "wearable" ? (
                          <Form.Check
                            type="checkbox"
                            label="Pay for laundary"
                          />
                        ) : (
                          ""
                        )}
                      </Form>
                      <Form>
                        <Row>
                          <Col xs={4}>
                            <Form.Control placeholder="Address" />
                          </Col>
                          <Col xs={4}>
                            <Form.Control placeholder="City" />
                          </Col>
                          <Col xs={4}>
                            <Form.Control placeholder="Zip" />
                          </Col>
                        </Row>
                      </Form>
                      <Col>
                        <Button type="submit">Buy</Button>{" "}
                      </Col>
                    </InputGroup>
                  ) : (
                    ""
                  )}

                  {Choose ? (
                    ""
                  ) : (
                    <Col>
                      <Button key={product._id} onClick={Show}>
                        Choose
                      </Button>{" "}
                    </Col>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
          {/*        ))} */}
        </Row>
      </Container>
    </>
  );
};

export default Products;

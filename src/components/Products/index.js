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
import { Formik } from "formik";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import * as Yup from "yup";
import { useHistory } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [payLaundry, setPayLaundry] = useState(false);
  const [payCourier, setPayCourier] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

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

  const BuyInitialValues = {
    address: "",
    city: "",
    state: "",
    zip: "",
    pay: [],
  };

  const buyValidation = Yup.object().shape({
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.string().required(),
  });

  const [Choose, setChoose] = useState({
    productId: "",
    donatorId: "",
  });
  const Show = (id, userId) => {
    setChoose({
      productId: id,
      donatorId: userId,
    });
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
            <Col id={product._id} key={product._id}>
              <Card className="img-fluid mb-2 mt-4">
                <Card.Img
                  variant="top"
                  src={arrayBufferToBase64(product.image.data)}
                />
                <Card.Body key={product._id}>
                  <Card.Title>{product.name}</Card.Title>
                  {Choose.productId === product._id ? (
                    <Formik
                      initialValues={BuyInitialValues}
                      validationSchema={buyValidation}
                      onSubmit={async (values, action) => {
                        action.setSubmitting(false);

                        if (payCourier || payLaundry) {
                          let total =
                            payCourier && payLaundry
                              ? 40
                              : payCourier && !payLaundry
                              ? 25
                              : 15;
                          //console.log(total);

                          axios
                            .post(`${url}/order/payment`, {
                              total: total * 100,
                            })
                            .then((res) => {
                              /*   console.log(
                                "CLIENT SECRET>>>",
                                res.data.clientSecret
                              ); */
                              stripe
                                .confirmCardPayment(res.data.clientSecret, {
                                  payment_method: {
                                    card: elements.getElement(CardElement),
                                  },
                                })
                                .then(({ paymentIntent }) => {
                                  /*  history.replace("/orders"); */
                                  console.log(paymentIntent);
                                  axios.post(`${url}/order`, {
                                    paymentId: paymentIntent.id,
                                    amount: paymentIntent.amount,
                                    currency: paymentIntent.currency,
                                    created: paymentIntent.created,
                                    type:
                                      payLaundry && payCourier
                                        ? "Paid for Laundry and Courier"
                                        : payLaundry && !payCourier
                                        ? "Paid for Laundry Only"
                                        : "Paid for Courier Only",
                                  });
                                })
                                .catch((e) => console.log(e));
                            })
                            .catch((e) => console.log(e));
                        } else {
                          console.log("VALUES >>>", values);
                          console.log("BRUH>>>", Choose);
                        }
                      }}
                    >
                      {({
                        errors,
                        touched,
                        handleSubmit,
                        values,
                        handleChange,
                        isSubmitting,
                        isValid,
                        setFieldValue,
                      }) => {
                        return (
                          <Form method="post" onSubmit={handleSubmit}>
                            <InputGroup className="mb-2">
                              <Form>
                                <Form.Check
                                  type="checkbox"
                                  label="Pay for courier"
                                  onClick={() => setPayCourier(!payCourier)}
                                />
                                {product.material_type === "wearable" ? (
                                  <Form.Check
                                    type="checkbox"
                                    label="Pay for laundary"
                                    onClick={() => setPayLaundry(!payLaundry)}
                                  />
                                ) : (
                                  ""
                                )}
                              </Form>
                              <Form>
                                <Row>
                                  <Col xs={4}>
                                    <Form.Control
                                      type="text"
                                      name="address"
                                      placeholder="Address"
                                      value={values.address}
                                      onChange={handleChange}
                                      isValid={
                                        touched.address && !errors.address
                                      }
                                      isInvalid={
                                        touched.address && errors.address
                                      }
                                    />
                                  </Col>
                                  <Col xs={4}>
                                    <Form.Control
                                      type="text"
                                      name="city"
                                      placeholder="City"
                                      value={values.city}
                                      onChange={handleChange}
                                      isValid={touched.city && !errors.city}
                                      isInvalid={touched.city && errors.city}
                                    />
                                  </Col>
                                  <Col xs={4}>
                                    <Form.Control
                                      type="text"
                                      name="state"
                                      placeholder="State"
                                      value={values.state}
                                      onChange={handleChange}
                                      isValid={touched.state && !errors.state}
                                      isInvalid={touched.state && errors.state}
                                    />
                                  </Col>
                                  <Col xs={4}>
                                    <Form.Control
                                      type="text"
                                      name="zip"
                                      placeholder="Zip"
                                      value={values.zip}
                                      onChange={handleChange}
                                      isValid={touched.zip && !errors.zip}
                                      isInvalid={touched.zip && errors.zip}
                                    />
                                  </Col>
                                </Row>
                                {payLaundry || payCourier ? (
                                  <>
                                    <Col>
                                      <Row>
                                        <CurrencyFormat
                                          renderText={(value) => (
                                            <h5>Total : {value}</h5>
                                          )}
                                          decimalScale={0}
                                          value={
                                            payCourier && payLaundry
                                              ? 40
                                              : payCourier && !payLaundry
                                              ? 25
                                              : 15
                                          }
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix={"$"}
                                        />
                                      </Row>
                                    </Col>
                                    <Col>
                                      <CardElement />
                                    </Col>
                                  </>
                                ) : (
                                  ""
                                )}
                              </Form>

                              <Col>
                                <Button
                                  type="submit"
                                  disabled={!isValid || isSubmitting}
                                >
                                  Buy
                                </Button>{" "}
                              </Col>
                            </InputGroup>
                          </Form>
                        );
                      }}
                    </Formik>
                  ) : (
                    ""
                  )}

                  {Choose.productId === product._id ? (
                    ""
                  ) : (
                    <Col>
                      <Button onClick={() => Show(product._id, product.userId)}>
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

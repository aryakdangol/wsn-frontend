import { Formik } from "formik";
import React, { useState } from "react";
import {
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import url from "../../url";

const donateInitialValues = {
  username: "",
  // type: "",
  // size: "",
  // count: "",
  description: "",
  // address: "",
  city: "",
  state: "",
  zip: "",
  productType: "",
  size: "",
  money: [],
  terms: false,
  file: null,
};

const donateValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Your username is too short")
    .required("Please enter your username"),
  // type: "",
  // size: "",
  // count: Yup.number().required(),
  // address: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  productType: Yup.string().required(),
  size: Yup.string().when("productType", {
    is: "wearable",
    then: Yup.string().required(),
  }),
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
  file: Yup.mixed().required("We need a photo!"),
});

const Donate = () => {
  const [selectedFile, setselectedFile] = useState("");

  const imageFn = (events) => {
    setselectedFile(events.target.files[0]);
  };

  const uploadFile = async (values) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("userId", "613ce79004d155338cbfc7dd");
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("zip", values.zip);
    formData.append("material_type", values.productType);
    formData.append("size", values.size);
    formData.append("canPay", values.money);
    formData.append("description", values.description);
    console.log(formData);
    try {
      await axios.post(`${url}/product`, formData);
    } catch (error) {
      console.log(error);
    }
    console.log(selectedFile);
  };
  return (
    <div>
      <Formik
        initialValues={donateInitialValues}
        validationSchema={donateValidationSchema}
        onSubmit={(values, actions) => {
          uploadFile(values);
          console.log(values);
          actions.setSubmitting(false);
          actions.resetForm();
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
            <>
              <Form method="post" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                        isInvalid={touched.username && errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isValid={touched.city && !errors.city}
                      isInvalid={touched.city && errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik04">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isValid={touched.state && !errors.state}
                      isInvalid={touched.state && errors.state}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      isValid={touched.zip && !errors.zip}
                      isInvalid={touched.zip && errors.zip}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationFormik05">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="productType"
                      value={values.productType}
                      onChange={handleChange}
                    >
                      <option>Select material</option>
                      <option value="wearable">Wearable</option>
                      <option value="book">Book</option>
                      <option value="furniture">Furniture</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      {errors.productType}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {values.productType === "wearable" ? (
                    <Form.Group as={Col} md="3" controlId="validationFormik05">
                      <Form.Label>Product Size</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="size"
                        value={values.size}
                        onChange={handleChange}
                      >
                        <option>Select size</option>
                        <option value="Esmall">Extra Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="Elarge">Extra Large</option>
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        {errors.size}
                      </Form.Control.Feedback>
                    </Form.Group>
                  ) : (
                    ""
                  )}

                  <Form.Group as={Col} md="3" controlId="validationFormik05">
                    <Form.Label>I can pay for:</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="money"
                      label="Courier"
                      value="courier"
                      onChange={handleChange}
                      // isValid={touched.money && !errors.money}
                      // isInvalid={touched.money && errors.money}
                    />

                    <Form.Check
                      type="checkbox"
                      name="money"
                      label="Laundry"
                      value="laundry"
                      onChange={handleChange}
                      // isValid={touched.money && !errors.money}
                      // isInvalid={touched.money && errors.money}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.money}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group as={Col} md="4" controlId="validationFormik06">
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Description"
                    className="mb-4"
                  >
                    <Form.Control
                      type="text"
                      as="textarea"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isValid={touched.terms && !errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
                <input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                    imageFn(event);
                  }}
                  required
                />
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  Submit form
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Donate;

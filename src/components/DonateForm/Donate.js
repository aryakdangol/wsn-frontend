import { Formik } from "formik";
import React from "react";
import {
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import * as Yup from "yup";

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
  terms: false,
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
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const Donate = () => {
  return (
    <div>
      <Formik
        initialValues={donateInitialValues}
        validationSchema={donateValidationSchema}
        onSubmit={(values, actions) => {
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

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./style";
import { NavBtnLink } from "../navbar/navbarelements";

const SignUpInitialValues = {
  fname: "",
  lname: "",
  email: "",
  phonenumber: "",
  password: "",
};

const SignUpValidationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your first name"),
  lname: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  phonenumber: Yup.string().required("Please enter your phone number"),
  password: Yup.string().required("Please enter your password"),
});

const Signup = () => {
  return (
    <PageWrapper>
      <Title>Sign up</Title>
      <Formik
        initialValues={SignUpInitialValues}
        validationSchema={SignUpValidationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting, isValid }) => {
          return (
            <>
              <Form name="login" method="post" onSubmit={handleSubmit}>
                <Label htmlFor="fname">
                  First Name
                  <Input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    valid={touched.fname && !errors.fname}
                    error={touched.fname && errors.fname}
                  />
                </Label>
                {errors.fname && touched.fname && (
                  <StyledInlineErrorMessage>
                    {errors.fname}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="lname">
                  Last Name
                  <Input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    valid={touched.lname && !errors.lname}
                    error={touched.lname && errors.lname}
                  />
                </Label>
                {errors.lname && touched.lname && (
                  <StyledInlineErrorMessage>
                    {errors.lname}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="phonenumber">
                  Phone number
                  <Input
                    type="tel"
                    id="phonenumber"
                    name="phonenumber"
                    placeholder="Phone number"
                    valid={touched.phonenumber && !errors.phonenumber}
                    error={touched.phonenumber && errors.phonenumber}
                  />
                </Label>
                {errors.phonenumber && touched.phonenumber && (
                  <StyledInlineErrorMessage>
                    {errors.phonenumber}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="your email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Label htmlFor="password">
                  Password
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                {errors.password && touched.password && (
                  <StyledInlineErrorMessage>
                    {errors.password}
                  </StyledInlineErrorMessage>
                )}
                <Submit type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Signing up...` : `Sign up`}
                </Submit>
                <NavBtnLink to="/login">
                  Don't have an account? Sign in
                </NavBtnLink>
              </Form>
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
};

export default Signup;

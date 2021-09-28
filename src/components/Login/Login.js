import React, { useState } from "react";
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

const SignInInitialValues = {
  email: "",
  password: "",
};

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

const Login = () => {
  const [isSignUp, setSignUp] = useState(true);
  const showSign = (e) => {
    e.preventDefault();
    setSignUp(!isSignUp);
  };
  return (
    <PageWrapper>
      <Title>Sign in</Title>
      <Formik
        initialValues={SignInInitialValues}
        validationSchema={SignInValidationSchema}
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
                  {isSubmitting ? `Signing in...` : `Sign in`}
                </Submit>
                <NavBtnLink to="/signup">
                  Don't have an account? Sign up
                </NavBtnLink>
              </Form>
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
};

export default Login;

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./style";
import { NavBtnLink } from "../navbar/navbarelements";
import { useHistory } from "react-router";
import url from "../../url";
import Swal from "sweetalert2";

const SignInInitialValues = {
  username: "",
  password: "",
};

const SignInValidationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your username"),
  password: Yup.string().required("Please enter your password"),
});

const Login = () => {
  const [isSignUp, setSignUp] = useState(true);
  const showSign = (e) => {
    e.preventDefault();
    setSignUp(!isSignUp);
  };
  const history = useHistory();

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
          axios
            .post(`${url}/user/login`, {
              username: values.username,
              password: values.password,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.error === "false") {
                localStorage.setItem("auth_token", res.data.auth);
                localStorage.setItem("userId", res.data.data.userId);
                history.push("/products");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Ooops.",
                  text: "Incorrect Username or Password",
                });
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting, isValid }) => {
          return (
            <>
              <Form name="login" method="post" onSubmit={handleSubmit}>
                <Label htmlFor="email">
                  Username
                  <Input
                    type="text"
                    name="username"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="name"
                    placeholder="your username"
                  />
                </Label>
                <ErrorMessage name="username">
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

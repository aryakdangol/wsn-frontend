import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./style";
import { NavBtnLink } from "../navbar/navbarelements";
import axios from "axios";
import url from "../../url";
import { useHistory } from "react-router";

const SignUpInitialValues = {
  name: "",
  username: "",
  email: "",
  phonenumber: "",
  password: "",
};

const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your  name"),
  username: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your user name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  phonenumber: Yup.string().required("Please enter your phone number"),
  password: Yup.string().required("Please enter your password"),
});

const Signup = () => {
  const history = useHistory();
  return (
    <PageWrapper>
      <Title>Sign up</Title>
      <Formik
        initialValues={SignUpInitialValues}
        validationSchema={SignUpValidationSchema}
        onSubmit={(values, actions) => {
          //console.log(values);
          actions.setSubmitting(false);
          //actions.resetForm();
          axios
            .post(`${url}/user/register`, {
              name: values.name,
              username: values.username,
              email: values.email,
              phone: values.phonenumber,
              password: values.password,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.error === "false") {
                Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "Account Created Succesfully",
                });
                history.push("/login");
              }
            })
            .catch((e) => {
              console.log(e);
              Swal.fire({
                icon: "error",
                title: "Ooops..",
                text: e,
              });
            });
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting, isValid }) => {
          return (
            <>
              <Form name="login" method="post" onSubmit={handleSubmit}>
                <Label htmlFor="fname">
                  Name
                  <Input type="text" id="name" name="name" placeholder="Name" />
                </Label>

                <Label htmlFor="username">
                  Username
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User Name"
                  />
                </Label>

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

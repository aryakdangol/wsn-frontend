import React, { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  LoginBox,
  LoginContainer,
  LoginHeader,
  Password,
  PhoneNum,
  SignUp,
  Submit,
  Username,
} from "./loginElements";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phonenumber: "",
  password: "",
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  // --- This is custom validation --
  // validate: values => {
  //     let errors ={}

  //     if(!values.username) errors.username = 'Required'
  //     if(!values.email){
  //         errors.email = 'Required'
  //     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
  //         errors.email ='Invalid email format'
  //     }
  //     if(!values.phonenumber) errors.phonenumber = 'Required'
  //     if(!values.password) errors.password = 'Required'
  //     return errors
  // },

  // --- This is validation using Yup --
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phonenumber: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginF = ({ Clicked }) => {
  const [isSignUp, setSignUp] = useState(false);

  const showSign = (e) => {
    e.preventDefault();
    setSignUp(!isSignUp);
  };
  //let head = isSignUp ? "SIGNUP" : "LOGIN";
  return (
    <LoginContainer Clicked={Clicked}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnChange = {false} // stopping formik to validate every input on any change and blur event.
        validateOnBlur={false}
      >
        {(formik) => {
          return (
            <div>
              {/* <form onSubmit ={formik.handleSubmit}> */}
              {/* The Form component is a small wrapper around the html form element that automatically hooks into formiks handle submit method */}
              <Form>
                {isSignUp ? (
                  <>
                    <div>
                      <label htmlFor="fname">First Name</label>
                      {/* <input */}
                      <Field
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First Name"
                        // --- manually validating ---
                        // onChange ={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.username}

                        // --- formik helping us
                        // {...formik.getFieldProps('username')}  -- we are able to further simplify it because the (Field) component
                        //it will behind the seens hookup inputs to the top level formik component,
                        //it uses the name attribute to match up with the formik state,
                        //by default Field will render an input element.
                      />
                      {/* {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> :null} */}{" "}
                      {/* This replacement is possible because the error ErrorMessage component will take care of rendering
                  //   the error message for the particular field indicated by the name attribute
                  //   only if the field have been visited and if there exists any errors */}
                      <ErrorMessage name="fname" />
                    </div>
                    <div>
                      <label htmlFor="lname">Last Name</label>
                      {/* <input */}
                      <Field
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        // --- manually validating ---
                        // onChange ={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.username}

                        // --- formik helping us
                        // {...formik.getFieldProps('username')}  -- we are able to further simplify it because the (Field) component
                        //it will behind the seens hookup inputs to the top level formik component,
                        //it uses the name attribute to match up with the formik state,
                        //by default Field will render an input element.
                      />
                      {/* {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> :null} */}
                      {/* This replacement is possible because the error ErrorMessage component will take care of rendering
                  //   the error message for the particular field indicated by the name attribute
                  //   only if the field have been visited and if there exists any errors */}
                      <ErrorMessage name="lname" />
                    </div>{" "}
                  </>
                ) : (
                  ""
                )}
                <div>
                  <label htmlFor="email">Email</label>
                  {/* <input */}
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    // --- manually validating ---
                    // onChange ={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.email}

                    // --- formik helping us
                    // {...formik.getFieldProps('email')}
                  />
                  {/*--- manually validating ---*/}
                  {/* {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> :null} */}

                  {/*--- Validating using formik's ErrorMessage component--- */}

                  <ErrorMessage name="email" />
                </div>
                {isSignUp ? (
                  <>
                    <div>
                      <label htmlFor="phonenumber">Phone Number</label>
                      {/* <input */}
                      <Field
                        type="tel"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Phone Number"
                        // --- manually validating ---
                        // onChange ={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.phonenumber}

                        // --- formik helping us
                        // {...formik.getFieldProps('phonenumber')}
                      />

                      {/*--- manually validating ---*/}
                      {/* {formik.touched.phonenumber && formik.errors.phonenumber ? <div>{formik.errors.phonenumber}</div> :null} */}

                      {/*--- Validating using formik's ErrorMessage component--- */}
                      <ErrorMessage name="phonenumber" />
                    </div>{" "}
                  </>
                ) : (
                  " "
                )}
                <div>
                  <label htmlFor="password">Password</label>
                  {/* <input */}
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    // --- manually validating ---
                    // onChange ={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.password}

                    // --- formik helping us
                    // {...formik.getFieldProps('password')}
                  />
                  {/*--- manually validating ---*/}
                  {/* {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> :null} */}

                  {/*--- Validating using formik's ErrorMessage component--- */}
                  <ErrorMessage name="password" />
                </div>
                {/* <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button> */}
                <Submit
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Login
                </Submit>

                <SignUp
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  onClick={(e) => showSign(e)}
                >
                  SignUp
                </SignUp>
              </Form>
            </div>
          );
        }}
      </Formik>

      {/* </LoginBox> */}
    </LoginContainer>
  );
};

export default LoginF;

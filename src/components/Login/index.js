import React, { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

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
import url from "../../url";

const initialValues = {
  username: "",
  password: "",
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
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = ({ Clicked }) => {
  const [isSignUp, setSignUp] = useState(false);
  const history = useHistory();
  const showSign = (e) => {
    e.preventDefault();
    setSignUp(!isSignUp);
  };

  const onSubmit = async (values, onSubmitProps) => {
    console.log(values.username);
    console.log(values.password);

    onSubmitProps.setSubmitting(false);

    try {
      const response = await axios.post(`${url}/user/login`, {
        username: values.username,
        password: values.password,
      });
      if (response.data.error === "false") {
        history.push("/products");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: e.response.data.message,
      });
    }
  };

  return (
    <LoginContainer Clicked={Clicked}>
      {/* <LoginBox onSubmit="">
        <LoginHeader>{head}</LoginHeader>

        <Username type="text" placeholder="Username"></Username>

        <PhoneNum
          isSignUp={isSignUp}
          type="tel"
          placeholder="Phone number"
        ></PhoneNum>

        <Password type="password" placeholder="Password"></Password> */}
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
              {/* The Form component is a small wrapper around the html form element that automatically hooks into formiks handle submit method */}

              <Form>
                <div>
                  <label htmlFor="username">Username</label>
                  {/* <input */}
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
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
                    the error message for the particular field indicated by the name attribute
                    only if the field have been visited and if there exists any errors */}
                  <ErrorMessage name="username" />
                </div>

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

                <Submit type="submit">Login</Submit>

                <SignUp
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

export default Login;

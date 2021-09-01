import React, { useState } from "react";
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

const Login = ({ Clicked }) => {
  const [isSignUp, setSignUp] = useState(false);

  const showSign = (e) => {
    e.preventDefault();
    setSignUp(!isSignUp);
  };
  let head = isSignUp ? "SIGNUP" : "LOGIN";
  return (
    <LoginContainer Clicked={Clicked}>
      <LoginBox onSubmit="">
        <LoginHeader>{head}</LoginHeader>

        <Username type="text" placeholder="Username"></Username>

        <PhoneNum
          isSignUp={isSignUp}
          type="tel"
          placeholder="Phone number"
        ></PhoneNum>

        <Password type="password" placeholder="Password"></Password>

        <Submit type="submit" isSignUp={isSignUp}>
          Login
        </Submit>

        <SignUp onClick={(e) => showSign(e)}>SignUp</SignUp>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

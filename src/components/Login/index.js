<<<<<<< HEAD
import React,{useState} from 'react'
import { LoginBox, LoginContainer, LoginHeader, Password, PhoneNum, SignUp, Submit, Username } from './loginElements'

const Login = ({Clicked}) => {
    const[isSignUp, setSignUp] = useState(false)

    const showSignUp = (e) => {
        e.preventDefault();
        setSignUp(!isSignUp);
      };
    let head = (isSignUp ? 'SIGNUP':'LOGIN');
    return (
        <LoginContainer Clicked={Clicked}>
            <LoginBox>
                <LoginHeader>
                    {head}
                </LoginHeader>
                
                <Username type = "text" placeholder= "Username">
                </Username>

                <PhoneNum isSignUp ={isSignUp} type = "tel"  placeholder= "Phone number">
                </PhoneNum>

                <Password type = "password"  placeholder= "Password">
                </Password>

                <Submit type = "submit" >
                    Login
                </Submit>

                <SignUp onClick={(e) => showSignUp(e)}>
                    SignUp
                </SignUp>

            </LoginBox>
        </LoginContainer>
        
    )
}

export default Login
=======
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
>>>>>>> 757cd8b31d241e9743775532627cb3f50a349766

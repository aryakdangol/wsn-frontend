import React from 'react'
import { LoginBox, LoginContainer, LoginHeader, Password, PhoneNum, SignUp, Submit, Username } from './loginElements'

const Login = ({Clicked, Open}) => {
    return (
        
        <LoginContainer Clicked ={Clicked}  action = "">
            <LoginBox>
            <LoginHeader>
                Start Donating
            </LoginHeader>
                <Username type = "text" placeholder= "Username">

                </Username>
                <PhoneNum type = "tel"  placeholder= "Phone number">

                </PhoneNum>
                <Password type = "password"  placeholder= "Password">

                </Password>
                <Submit type = "submit">
                    Login
                </Submit>
            </LoginBox>
            
            <SignUp>

            </SignUp>
        </LoginContainer>
    )
}

export default Login

import styled from 'styled-components'

export const LoginContainer = styled.form`
    //background: rgb(22,74,65);
    //background: linear-gradient(90deg, rgba(22,74,65,1) 0%, rgba(77,119,78,1) 44%, rgba(157,200,141,1) 100%);
    // background: #0c0c0c;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    /* padding: 0 20px; */
    height: 80vh;
    z-index:999;
    left: 25%;
    top: 17%;
    transition: 0.3s ease-in-out;
    opacity: ${({ Clicked }) => ( Clicked ? '100%' : '0%')};
    
    `
export const LoginHeader = styled.h2`
    color: rgb(22,74,65);
    font-size: 48px;
    text-align: center;
    padding: 40px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    `

export const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 598px;
    width: 653px;
    background:black;
    border-radius: 50px;
    
    `

export const Username = styled.input`
    height: 42px;
    width: 288px;
    margin: 0 0 10px 0;
    `
export const PhoneNum = styled.input`
    height: 42px;
    width: 288px;
    margin: 0 0 10px 0;

    `

export const Password = styled.input`
    height: 42px;
    width: 288px;
    margin: 0 0 10px 0;

    `

export const Submit = styled.button`
    height: 50px;
    width: 288px;
    margin: 8 0 16px 0;
    border: 1px solid rgb(22,74,65);
    color: rgb(22,74,65);
    padding: 16px;
    background-color: transparent;
    `

export const SignUp = styled.div`
    
    `
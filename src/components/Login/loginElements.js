import styled from 'styled-components'

export const LoginBackground=styled.div`
    position: fixed;
    align-items: center;
    z-index:998;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
    width: 100%;
    opacity:${({Clicked})=>Clicked ? '100%': '0'};
    top: ${({ Clicked }) => ( Clicked ? '0' : '-100%')};
    `

export const LoginContainer = styled.div`
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
    left: 30%;
    transition: 0.3s ease-in-out;
    top: ${({ Clicked }) => ( Clicked ? '15%' : '-200%')};
    
    
    `

export const LoginBox = styled.div`
    display: flex;
    border: 2px;
    border-color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
    width: 500px;
    background:pink;
    border-radius: 50px;
    
`

export const LoginHeader = styled.h2`
    color: rgb(22,74,65);
    font-size: 48px;
    text-align: center;
    padding: 40px;
    

    @media screen and (max-width: 768px){
        font-size: 30px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
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
    display: ${({isSignUp}) => (isSignUp ? '':'none')};
    `

export const Password = styled.input`
    height: 42px;
    width: 288px;
    margin: 0 0 10px 0;

    `

export const Submit = styled.button`
    height: 50px;
    width: 288px;
    margin: 8px 0 16px 0;
    border: 1px solid rgb(22,74,65);
    color: rgb(22,74,65);
    padding: 16px;
    background-color: transparent;
    cursor: pointer;
    display: ${({isSignUp}) => (isSignUp ? 'none':'')};
    
    &:hover{
        background-color: black;
        transition: all 0.1s ease-in-out;
        color: wheat;
    }

    `

export const SignUp = styled.button`
    height: 50px;
    width: 288px;
    margin: 0 0 16px 0;
    border: 1px solid rgb(22,74,65);
    color: rgb(22,74,65);
    padding: 16px;
    background-color: transparent;
    cursor: pointer;

    &:hover{
        background-color: black;
        transition: all 0.1s ease-in-out;
        color: wheat;
    }

    `

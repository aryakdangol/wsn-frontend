import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom";

export const CUSButton =styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'rgb(22,74,65)' : '#fff')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F1B24A' : '#01BF71')};
        color: ${({dark}) => (dark ? '#164A41' : '#164A41')};
    }

    `

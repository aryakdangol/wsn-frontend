import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  //background: #4D774E;
  background: rgb(22, 74, 65);
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1150px;
`;

export const NavLogo = styled(LinkR)`
  color: rgb(22, 74, 65);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: rgb(22, 74, 65);
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0 !important;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0.5rem;
`;
export const NavLinks = styled(LinkS)`
  color: rgb(22, 74, 65);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
  }
  &:hover {
    transition: akk 0.2s ease-in-out;
    color: #f1b24a;
  }
`;
export const LinkRouter = styled(LinkR)`
  color: rgb(22, 74, 65);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
  }
  &:hover {
    transition: akk 0.2s ease-in-out;
    color: #f1b24a;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: rgb(22, 74, 65);
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #f1b24a;
    color: #164a41;
  }
`;

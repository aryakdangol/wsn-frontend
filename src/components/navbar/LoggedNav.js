import React from "react";
import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LinkRouter,
} from "./navbarelements";

const LoggedNav = ({ toggle, Open }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userId");
    history.push("/");
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo /*href ="" */ to="/"> WSN </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <LinkRouter to="/">Home</LinkRouter>
            </NavItem>
            <NavItem>
              <LinkRouter to="/orders">My Orders</LinkRouter>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/donate">Donate</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default LoggedNav;

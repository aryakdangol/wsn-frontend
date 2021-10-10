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
} from "./navbarelements";

const Navbar = ({ toggle, Open }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth_token");
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
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="engage">Engage</NavLinks>
            </NavItem>
            <NavBtn>
              {!localStorage.getItem("auth_token") ? (
                <NavBtnLink to="/login">Login</NavBtnLink>
              ) : (
                <NavBtnLink onClick={logout}>Logout</NavBtnLink>
              )}
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

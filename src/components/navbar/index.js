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
              <LinkRouter to="/">Home</LinkRouter>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <LinkRouter to="/about">About</LinkRouter>
            </NavItem>
            <NavItem>
              <a
                className="navA"
                href="https://forms.gle/dxL1gB72CvKjGxfy6"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Engage
              </a>
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

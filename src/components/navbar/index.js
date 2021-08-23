import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './navbarelements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo /*href ="" */ to='/'> WSN </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to = 'home'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = 'gallery'>Gallery</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = 'about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = 'engage'>Engage</NavLinks>
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

export default Navbar;


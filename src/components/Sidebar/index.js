import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SidebtnWrap, SidebarMenu } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon  />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu >
                    <SidebarLink to ='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to ='gallery' onClick={toggle}>Gallery</SidebarLink>
                    <SidebarLink to ='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to ='engage' onClick={toggle}>Engage</SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                        <SidebarRoute to ='/donate'> Donate </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

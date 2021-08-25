import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavItem, NavLogo, NavMenu, MobileIcon } from './NavbarElements'
function Navbar() {
    return (
        <>

            <Nav>
                <NavbarContainer>
                    <NavLogo> Camping</NavLogo>
                    <MobileIcon >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem> Services</NavItem>
                        <NavItem> Tours</NavItem>
                        <NavItem> Contact</NavItem>
                        <NavItem> About </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>


        </>
    )
}

export default Navbar

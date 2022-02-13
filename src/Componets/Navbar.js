import React from 'react'
import { useState } from 'react'
import { Container, LogoContainer, Menu, MenuIten, MenuItenLink, MobileIcon, Wrapper } from './NavbarElement'
import { FaPhotoVideo, FaStream, FaTimesCircle, FaHome, FaBriefcase, FaGlasses, FaUserTie } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
const Navbar = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        
                            <FaPhotoVideo />
                            <a href="/" style={{ color: "#fff" }}>
                                B&B AUTOGLASS
                            </a>
                        

                    </LogoContainer>

                    <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)} >
                        {
                            showMobileMenu ? <FaTimesCircle /> : <FaStream />
                        }
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                            <MenuItenLink>
                                <div>
                                    <FaHome />
                                    <a href="/" style={{ color: "#fff" }}>
                                        Home
                                    </a>
                                </div>
                            </MenuItenLink>
                        </MenuIten>
                        <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                            <MenuItenLink>
                                <div>
                                    <FaUserTie />
                                    <a href="/aboutMe" style={{ color: "#fff" }}>
                                        About US
                                    </a>
                                </div>
                            </MenuItenLink>
                        </MenuIten>
                        <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                            <MenuItenLink>
                                <div>
                                    <FaBriefcase />
                                    <a href='/portfolio' style={{ color: "#fff" }}>
                                        Our Works
                                    </a>
                                </div>
                            </MenuItenLink>
                        </MenuIten>
                        <MenuIten onClick={() => setshowMobileMenu(!showMobileMenu)} >
                            <MenuItenLink>
                                <div>
                                    <FaGlasses />
                                    <a href='/contactMe' style={{ color: "#fff" }}>
                                        Contact US
                                    </a>
                                </div>
                            </MenuItenLink>
                        </MenuIten>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>

    )

}
export default Navbar
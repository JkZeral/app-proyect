import React from 'react'
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './Navbar.elements'
import { DiAndroid } from "react-icons/di";
import { FaBars, FaHome, FaUserAlt, FaBriefcase} from "react-icons/fa";
import { IconContext } from "react-icons";
import { HiPhone } from "react-icons/hi";
import { Link, Outlet } from 'react-router-dom';
import "../Components/Pages/Inicio.css"

export const Navbar = () => {
    return (
        <div className='cerrar'> 
        <Container>
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "1em", }}} className='Logo'>
                    <LogoContainer >
                        <DiAndroid/>
                        <p>
                            -EDSMI-
                        </p>
                    </LogoContainer>

                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    
                    <Menu>
                        <MenuItem>
                            <MenuItemLink >
                                <div>
                                  <FaHome />
                                    <Link to={"/"}>
                                        INICIO
                                    </Link>
                                  
                                </div>
                            </MenuItemLink>
                        </MenuItem>



                        <MenuItem>
                            <MenuItemLink >
                                <div>
                                  <FaUserAlt/>
                                    <Link to={"/SobreLasEm"}>
                                        SOBRE LAS EMPRESAS
                                    </Link>
                                     
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink >
                                <div>
                                  <FaBriefcase />
                                  <Link to={"/Cards"}>
                                        ARCHIVOS
                                    </Link>
                                  
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink>
                                <div>
                                  <HiPhone/>
                                  
                                  <Link to={"/Contacts"}>
                                        CONTACTOS
                                    </Link>
                                  

                                  
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink >
                                <div>
                                  <FaBriefcase />
                                  <Link to={"/Formulario"}>
                                        REGISTRAR
                                    </Link>
                                  
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
                
            <Outlet/>
            </Wrapper>
            
        </Container>
        
        </div>
  ); 
}

export default Navbar

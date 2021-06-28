import React from 'react';
// import { useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Grid } from "@material-ui/core";
// import { Grid, Paper, TextField, Typography, Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
// import { logoutUser } from "../styles/loginStyles"
import { logoutUser } from "../actions/authActions"
import { useSelector, useDispatch } from 'react-redux'
// import Tarjeta from '../components/Tarjetas/Tarjeta';

// //googleAPI Credentials
// import { GoogleLogin } from 'react-google-login';
// //FacebookAPI Credentials
// import FacebookLogin from 'react-facebook-login';


export default function Navigation() {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();
    
    return (
     <Navbar bg="primary" variant="dark" expand="lg">
            {/* <Navbar.Brand as={NavLink} to={'/Carrito'} >Carrito</Navbar.Brand> */}
            <Navbar.Brand as={NavLink} to={'/Posts'} >Carrito</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-menu"></Navbar.Toggle>
            <Navbar.Collapse id="main-menu">
                <Nav className="mr-auto">
                    {/* <Nav.Link >Crear Post</Nav.Link>  */}
                    { loggedIn && <Nav.Link as={NavLink} to={'/newpost'}>Crear Post</Nav.Link> }
                </Nav>
                <Nav >

                { !loggedIn ? (
                        <React.Fragment>
                            {/* <Nav.Link as={NavLink} to={'/signup'}>Crear Cuenta</Nav.Link> */}
                            <Nav.Link as={NavLink} to={'/signin'}>Iniciar Sesion</Nav.Link>
                            
                            
                        </React.Fragment>
                    )
                    : (<NavDropdown  id="menu-dropdown">
                        <NavDropdown.Item as={NavLink} to={'/posts'}>Mis Posts</NavDropdown.Item>
                        <NavDropdown.Item 
                        as={NavLink}  to={'/Signin'} 
                            onClick={() => dispatch(logoutUser())}
                                >Cerrar Sesion</NavDropdown.Item>
                        </NavDropdown>)  
                     }
                    



                     {/*       <Nav.Link >Crear Cuenta</Nav.Link>
                            <Nav.Link  as={NavLink} to={'/signin'}>Iniciar Sesion</Nav.Link>
                            {/* {console.log("Inicio sesion : "+{loggedIn})} */}
                                
                      {/*  <NavDropdown title="Menu" id="menu-dropdown">
                            <NavDropdown.Item as={NavLink} to={'/car'} >Carrito</NavDropdown.Item>
                            {/* <NavDropdown.Item >Cerrar sesion</NavDropdown.Item> */}

                      {/*      <NavDropdown.Item onClick={() => 
                                dispatch(logoutUser())
                                   
                                }
                            >Cerrar sesion
                            </NavDropdown.Item>
                        

                        </NavDropdown>          */}
                            
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

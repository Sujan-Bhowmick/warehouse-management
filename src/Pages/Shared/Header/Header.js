import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo4 (1).png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar  collapseOnSelect  className='' expand="lg" bg="dark" sticky='top' variant="dark">
                <Container >
                    <Navbar.Brand as = {Link} to = "/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link className='nav-links' href="/home">Home</Nav.Link>
                            <Nav.Link className='nav-links' as = {Link} to = '/blogs'>Blogs</Nav.Link>
                            {/* <NavDropdown className='' title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav >
                            <Nav.Link className='nav-links' href="/products">Products</Nav.Link>
                            {
                                user && <>
                                   <Nav.Link className='nav-links ' href="/inventory">Add </Nav.Link>
                                   <Nav.Link className='nav-links ' href="/manage">Manage</Nav.Link>
                                </>
                            }
                           
                            {
                                user?
                                <button onClick={handleSignOut} className='text-decoration-none btn btn-link nav-links'>Signout</button>
                                :
                                <Nav.Link className='nav-links' as={Link} to = 'login' >Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
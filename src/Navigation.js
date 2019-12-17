import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Navigation.css'


class Navigation extends React.Component {

    render() {
        return (
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="/">[BentoBox]</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#link">How it works</Nav.Link>
                        <NavDropdown title="Wardrobes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/form">Work</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Maternity</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Weekend</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Seasonal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Vacation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Special Occasion</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse>
            </Navbar>          
        );
  }
}

export default Navigation;
import React from 'react';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';


class  NavBar extends React.Component{
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">TeamEez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#events">Events</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                                {/*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                                {/*<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                                {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <Form inline>
                            {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                            <Button variant="outline-dark">Sign In / Up</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}


export default NavBar;
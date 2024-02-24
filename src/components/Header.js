import React from "react";
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';


const Header = () =>{
    return(
        <>
            <Navbar className="nav-style" expand="lg">
            <Container>
            <Navbar.Brand href="#"> 
            <Image className="logo-img" 
            src="images/logo.jpg" alt="VTU" roundedCircle />
            <h6 className="logo-text">Visvesvaraya Technological University, Belagavi</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About US</Nav.Link>
                        <NavDropdown title="Academy" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Examination Guidelines</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">examination application</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Results</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="VTU Depatments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Aerospace Engineering</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Computer Science and Engineering</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Management Studies</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Mechanical Engineering</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Staff login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            </Navbar>
        </>
    )
}

export default Header
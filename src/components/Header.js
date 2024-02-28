import React from "react";
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () =>{
    return(
        <>
            <Navbar className="nav-style" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/"> 
                            <Image className="logo-img" 
                            src="images/logo.jpg" alt="VTU" roundedCircle />
                            <h6 className="logo-text">Visvesvaraya Technological University, Belagavi</h6>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">

                                <LinkContainer to='/'>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/about'>
                                    <Nav.Link href="/about">About US</Nav.Link>
                                </LinkContainer>

                                <NavDropdown title="Academy" id="basic-nav-dropdown">
                                    <LinkContainer to='/admission'>
                                        <NavDropdown.Item href="/admission">Admission</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/circulars/notification'>
                                        <NavDropdown.Item href="/circulars/notification">Circulars & Notification</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/certificate issued'>
                                        <NavDropdown.Item href="/certificate issued">Certificate Issued</NavDropdown.Item>
                                    </LinkContainer>                               
                                </NavDropdown>

                                <NavDropdown title="Examination" id="basic-nav-dropdown">
                                    <LinkContainer to='/exam-guidelines'>
                                        <NavDropdown.Item href="/exam-guidelines">Examination Guidelines</NavDropdown.Item>
                                    </LinkContainer>
                                    
                                    <LinkContainer to='/exam application'>
                                        <NavDropdown.Item href="/exam-application">Exam Application</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/result/loginpage'>
                                        <NavDropdown.Item href="/result/loginpage">Results</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                                <NavDropdown title="VTU Depatments" id="basic-nav-dropdown">
                                    <LinkContainer to=''>
                                        <NavDropdown.Item href="#">Aerospace Engineering</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to=''>
                                        <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to=''>
                                        <NavDropdown.Item href="#">Computer Science and Engineering</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to=''>
                                        <NavDropdown.Item href="#">Management Studies</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to=''>
                                        <NavDropdown.Item href="#">Mechanical Engineering</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                                <LinkContainer to='/staff login'>
                                    <Nav.Link href="/staff login">Staff login</Nav.Link>
                                </LinkContainer>

                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
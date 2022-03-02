import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Router, Route, Switch, Link } from "react-router-dom";
import logo from '../Images/Logo.jpg'
import PThomepage from './PThomepage';
import PTchisiamo from './PTchisiamo';

function PTheader(props) {
    return (
        <Navbar bg="success" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/chisiamo">Chi siamo</Nav.Link>
                        <Nav.Link href="#link">I volti del progetto</Nav.Link>
                        <NavDropdown title="I luoghi del progetto" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Villaggio1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Villaggio2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Villaggio3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PTheader;
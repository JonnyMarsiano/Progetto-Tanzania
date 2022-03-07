import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import logo from '../Images/Logo.jpg'

function PTheader(props) {
    return (
        <Navbar bg="success" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/chisiamo">Chi siamo</Nav.Link>
                        <Nav.Link href="#link">I volti del progetto</Nav.Link>
                        <NavDropdown title="I luoghi del progetto" id="basic-nav-dropdown" className="dropdown">
                            <NavDropdown.Item href="/kitisi">Kitisi</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/kisilwa">Kisilwa</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/villaggi">La mappa</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PTheader;
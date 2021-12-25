import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../Images/Logo.jpg'

function PTheader(props){
    return(
        <Navbar bg="success" className="fixed-top Header">
            <Container>
                <Nav className="justify-content-start">
                    <img className="logo" src={logo}/>Progetto Tanzania
                </Nav>
                
            </Container>
        </Navbar>
    );
}

export default PTheader;
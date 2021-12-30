import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../Images/Logo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import PTsidebar from './PTsidebar';

function PTheader(props) {
    const [hideSidebar, setHideSidebar] = useState(true);

    return (
        <>
            <Navbar bg="success" className="fixed-top Header">
                <Container>
                    <Nav className="justify-content-start">
                        <img className="logo" src={logo} />
                        <p className="logoText">Progetto Tanzania</p>
                    </Nav>
                    <Nav className="justify-content-end">
                        <GiHamburgerMenu size={30} onClick={() => setHideSidebar(prev => !prev)} />
                    </Nav>
                </Container>
            </Navbar>

            { hideSidebar ? "" : <PTsidebar /> }
        </>
    );
}

export default PTheader;
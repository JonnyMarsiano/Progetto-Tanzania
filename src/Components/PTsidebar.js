import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Row, Container, Col } from "react-bootstrap";

function PTsidebar(props) {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                </Col>
                <Col>
                    <ProSidebar className="Sidebar">
                        <Menu iconShape="square">
                            <MenuItem >Home</MenuItem>
                            <MenuItem >Chi siamo</MenuItem>
                            <MenuItem >I luoghi del progetto</MenuItem>
                            <MenuItem >I volti del progetto</MenuItem>
                        </Menu>
                    </ProSidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default PTsidebar;
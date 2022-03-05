import { Row, Col, Container, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom"
import map from '../Images/Mappa.jpg'


function PTvillaggi(props) {

    const popoverKitisi = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Villaggio di Kitisi</Popover.Header>
            <Popover.Body>
                <Link to="/kitisi">Viaggia nel villaggio</Link>
            </Popover.Body>
        </Popover>
    );

    const popoverKisilwa = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Villaggio di Kisilwa</Popover.Header>
            <Popover.Body>
                <Link to="/kitisi">Viaggia nel villaggio</Link>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div class="hiddenButtonContainer">
                            <img className="map" src={map} alt="" />
                            <OverlayTrigger trigger={"click"} placement="right" overlay={popoverKitisi}>
                                <button class="hiddenButton hiddenButtonKitisi">JM</button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger={"click"} placement="left" overlay={popoverKisilwa}>
                                <button class="hiddenButton hiddenButtonKisilwa">JM</button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PTvillaggi;
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import Kitisi1 from '../Images/Kitisi/Kitisi 1.JPG'
import Kitisi2 from '../Images/Kitisi/Kitisi 2.jpg'
import Kitisi3 from '../Images/Kitisi/Kitisi 3.jpg'
import Kitisi4 from '../Images/Kitisi/Kitisi 4.jpg'
import Kitisi5 from '../Images/Kitisi/Kitisi 5.JPG'
import Kitisi6 from '../Images/Kitisi/Kitisi 6.JPG'
import Kitisi7 from '../Images/Kitisi/Kitisi 7.JPG'


function PTKitisi(props) {

    const descriptionsKitisi = [
        "Bambini che giocano, al nostro arrivo a Kitisi",
        "Accoglienza bambini",
        "Scorcio del villaggio di Kitisi al tramonto",
        "Grande acacia all’ingresso di Kitisi, funge anche da stazione bus",
        "Padre Salvatore utilizza il grande albero come confessionale, di fronte alla chiesa di Kitisi",
        "Domenica, dopo la celebrazione della messa, bambini che condividono il pranzo, prima offerto agli ospiti",
        "Chiesa di Kitisi"
    ];

    return (
        <>
            {/*IMMAGINI KITISI*/}
            <Container>
                <Row>
                    <h1 className="villageTitle">Kitisi</h1>
                </Row>
                <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(3)}>
                    <Row>
                        <img className="image frontImage" onClick={props.setPhotoToShow(4)} src={Kitisi4} alt="" />
                    </Row>
                </Link>
                <Row>
                    <h3 className="galleryTitle">Le foto del villaggio</h3>
                </Row>
            </Container>

            <Container>
                <Row className="framedImage">
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(0)}>
                                <Row>
                                    <img className="image" src={Kitisi1} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[0]}</div></Row>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(1)}>
                                <Row>
                                    <img className="image" src={Kitisi2} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[1]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(2)}>
                                <Row>
                                    <img className="image" src={Kitisi3} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[2]}</div></Row>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(3)}>
                                <Row>
                                    <img className="image" src={Kitisi4} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[3]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(4)}>
                                <Row>
                                    <img className="image" src={Kitisi5} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[4]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(5)}>
                                <Row>
                                    <img className="image" src={Kitisi6} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[5]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(6)}>
                                <Row>
                                    <img className="image" src={Kitisi7} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKitisi[6]}</div></Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PTKitisi;
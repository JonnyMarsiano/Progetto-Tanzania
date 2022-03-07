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
                    <h1 className="villageTitle"><b>Kitisi</b></h1>
                </Row>
                <Link to="/kitisi/gallery" onClick={() => props.setPhotoToShow(3)}>
                    <Row>
                        <img className="image frontImage" onClick={props.setPhotoToShow(4)} src={Kitisi4} alt="" />
                    </Row>
                </Link>
                <Row className="multi-line">
                    <div className="villageDescription">
                        <p>E' magia d'argilla, è passaggio di giraffe e avamposto dei bracconieri, è granaio e cammino angusto, luogo che scorre come i serpenti nella stagione secca, luce di miele al tramonto e ambra d'alba, palude delle piogge e polvere di vento. Il ritrovo di grandi e piccoli sotto la chioma spinosa della grande acacia. La chiesa di Baba ha un campanile cerchione-di-camion e un confessionale baobab, e poi un viavai curioso a sorvegliarla.</p>
                        <p>Il Progetto Tanzania si è impegnato a fare arrivare la luce elettrica in questa parte della missione fuori dal percorso principale, pagando al Governo tanzano le spese delle pratiche di elettrificazione e nel contempo contribuendo a fare installare un contatore centrale in un locale adiacente alla chiesa. Adesso tocca al Governo dare la luce tanto attesa. Polepole.</p>
                        <p>Uno dei nostri sogni è quello di sistemare alcune aule, in questo momento pericolanti, della piccola scuola elementare. Nel frattempo, le giraffe continuano timidamente a reiterare il loro passaggio, e i bambini hanno le divise rosse: come l'argilla bagnata.</p>
                    </div>
                </Row>
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
                        <div className="frame differentFrame">
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
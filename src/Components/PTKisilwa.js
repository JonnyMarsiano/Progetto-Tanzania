import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import Kisilwa1 from '../Images/Kisilwa/Kisilwa 1.JPG'
import Kisilwa2 from '../Images/Kisilwa/Kisilwa 2.JPG'
import Kisilwa3 from '../Images/Kisilwa/Kisilwa 3.jpg'
import Kisilwa4 from '../Images/Kisilwa/Kisilwa 4.jpg'
import Kisilwa5 from '../Images/Kisilwa/Kisilwa 5.jpg'
import Kisilwa6 from '../Images/Kisilwa/Kisilwa 6.jpg'
import Kisilwa7 from '../Images/Kisilwa/Kisilwa 7.jpg'
import Kisilwa8 from '../Images/Kisilwa/Kisilwa 8.jpg'
import Kisilwa9 from '../Images/Kisilwa/Kisilwa 9.jpg'
import Kisilwa10 from '../Images/Kisilwa/Kisilwa 10.jpg'
import Kisilwa11 from '../Images/Kisilwa/Kisilwa 11.jpg'

function PTKisilwa(props) {

    const descriptionsKisilwa = [
        "Accoglienza al villaggio di Kisilwa",
        "Accoglienza",
        "Mamma accorre al villaggio dalla savana per partecipare alla festa di inaugurazione delle nuove aule",
        "Preparativi per la festa di inaugurazione",
        "Festa di inaugurazione delle nuove aule, gli ospiti ricevono i doni della comunità",
        "Vista nuove aule",
        "Vista nuove aule",
        "Visita dei benefattori all’interno delle nuove aule",
        "Bambino accorre al villaggio dalla savana per partecipare all’inaugurazione delle nuove aule",
        "Il sindaco del villaggio di Kisilwa ringrazia gli ospiti e i benefattori",
        "Festa per l’inaugurazione delle nuove aule"
    ];

    return (
        <>

            {/*IMMAGINI KISILWA*/}
            <Container>
                <Row>
                    <h1 className="villageTitle"><b>Kisilwa</b></h1>
                </Row>
                <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(1)}>
                    <Row>
                        <img className="image frontImage" onClick={props.setPhotoToShow(4)} src={Kisilwa2} alt="" />
                    </Row>
                </Link>
                <div className="villageDescription">
                    <p>O prima o dentro la savana più crudele, laddove si perdevano le piste e il fiume curva silente, di leopardi risaputi e di lucciole insonni, lo stridore è delle iene e i canti delle mamme, gli alberi abbattuti dal pascolo degli elefanti e la scarsa dimestichezza con la curiosità viaggiante degli wazungu, la salita e le risaie, fumo dagli sterpi e il formicolio d'indomiti bambini tra sterrati buoni per una palla di pezza e l'ombra profumata dei mango.</p>
                    <p>Il Progetto Tanzania - supportato dalla Hakuna Matata Onlus - ha costruito una piccola scuola elementare: i minuscoli studenti, fino ad allora, erano costretti a percorrere circa 6 miglia verso Mahuninga, incamminandosi al buio, per poter frequentare. Alcuni di loro però, negli anni, non vi sono mai arrivati, preda degli animali o vittime delle piene del fiume.</p>
                    <p>E allora una corsa contro il tempo, organizzare piccoli eventi e soprattutto pubblicare i "Quaderni tanzani", in pochi mesi le aule hanno iniziato a essere tracciate, delineate, messe su pietra su pietra, e poi piste sicure, e poi strade battute, e la luce fin quasi lassù, dove la savana inizia ma non fa più quella paura.</p>
                </div>
                <Row>
                    <h3 className="galleryTitle">Le foto del villaggio</h3>
                </Row>
            </Container>

            <Container>
                <Row className="framedImage">
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(0)}>
                                <Row>
                                    <img className="image" src={Kisilwa1} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[0]}</div></Row>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(1)}>
                                <Row>
                                    <img className="image" src={Kisilwa2} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[1]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(2)}>
                                <Row>
                                    <img className="image" src={Kisilwa3} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[2]}</div></Row>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(3)}>
                                <Row>
                                    <img className="image" src={Kisilwa4} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[3]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(4)}>
                                <Row>
                                    <img className="image" src={Kisilwa5} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[4]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(5)}>
                                <Row>
                                    <img className="image" src={Kisilwa6} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[5]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(6)}>
                                <Row>
                                    <img className="image" src={Kisilwa7} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[6]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(7)}>
                                <Row>
                                    <img className="image" src={Kisilwa8} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[7]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(8)}>
                                <Row>
                                    <img className="image" src={Kisilwa9} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[8]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(9)}>
                                <Row>
                                    <img className="image" src={Kisilwa10} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[9]}</div></Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="frame">
                            <Link to="/kisilwa/gallery" onClick={() => props.setPhotoToShow(10)}>
                                <Row>
                                    <img className="image" src={Kisilwa11} alt="" />
                                </Row>
                            </Link>
                            <Row className="multi-line"><div className="photoDescription">{descriptionsKisilwa[10]}</div></Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default PTKisilwa;
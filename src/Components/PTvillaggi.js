import React, { useState } from 'react';
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
import map from '../Images/Mappa.jpg'
import Kitisi1 from '../Images/Kitisi/Kitisi 1.JPG'
import Kitisi2 from '../Images/Kitisi/Kitisi 2.jpg'
import Kitisi3 from '../Images/Kitisi/Kitisi 3.jpg'
import Kitisi4 from '../Images/Kitisi/Kitisi 4.jpg'
import Kitisi5 from '../Images/Kitisi/Kitisi 5.JPG'
import Kitisi6 from '../Images/Kitisi/Kitisi 6.JPG'
import Kitisi7 from '../Images/Kitisi/Kitisi 7.JPG'
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

function PTvillaggi(props) {

    //KITISI
    const [showGalleryKitisi, setShowGalleryKitisi] = useState(false);
    const handleCloseGalleryKitisi = () => setShowGalleryKitisi(false);
    const [galleryKitisi, setGalleryKitisi] = useState({
        index: 0,
        picList: [Kitisi1, Kitisi2, Kitisi3, Kitisi4, Kitisi5, Kitisi6, Kitisi7]
    })

    const descriptionsKitisi = [
        "Bambini che giocano, al nostro arrivo a Kitisi",
        "Accoglienza bambini",
        "Scorcio del villaggio di Kitisi al tramonto",
        "Grande acacia all’ingresso di Kitisi, funge anche da stazione bus",
        "Padre Salvatore utilizza il grande albero come confessionale, di fronte alla chiesa di Kitisi",
        "Domenica, dopo la celebrazione della messa, bambini che condividono il pranzo, prima offerto agli ospiti",
        "Chiesa di Kitisi"
    ];

    const handleShowGalleryKitisi = (i) => {
        setGalleryKitisi(prev => {
            return { index: i, picList: prev.picList }
        });
        setShowGalleryKitisi(true);
    };
    const onClickNextKitisi = () => {
        if (galleryKitisi.index + 1 === galleryKitisi.picList.length) {
            setGalleryKitisi(prev => {
                return { index: 0, picList: prev.picList }
            })
        } else {
            setGalleryKitisi(prev => {
                return { index: prev.index + 1, picList: prev.picList }
            })
        }
    }
    const onClickPreviousKitisi = () => {
        if (galleryKitisi.index - 1 === -1) {
            setGalleryKitisi(prev => {
                return { index: prev.picList.length - 1, picList: prev.picList }
            })
        } else {
            setGalleryKitisi(prev => {
                return { index: prev.index - 1, picList: prev.picList }
            })
        }
    }


    //KISILWA
    const [showGalleryKisilwa, setShowGalleryKisilwa] = useState(false);
    const handleCloseGalleryKisilwa = () => setShowGalleryKisilwa(false);
    const [galleryKisilwa, setGalleryKisilwa] = useState({
        index: 0,
        picList: [Kisilwa1, Kisilwa2, Kisilwa3, Kisilwa4, Kisilwa5, Kisilwa6, Kisilwa7, Kisilwa8, Kisilwa9, Kisilwa10, Kisilwa11]
    })

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

    const handleShowGalleryKisilwa = (i) => {
        setGalleryKisilwa(prev => {
            return { index: i, picList: prev.picList }
        });
        setShowGalleryKisilwa(true);
    };
    const onClickNextKisilwa = () => {
        if (galleryKisilwa.index + 1 === galleryKisilwa.picList.length) {
            setGalleryKisilwa(prev => {
                return { index: 0, picList: prev.picList }
            })
        } else {
            setGalleryKisilwa(prev => {
                return { index: prev.index + 1, picList: prev.picList }
            })
        }
    }
    const onClickPreviousKisilwa = () => {
        if (galleryKisilwa.index - 1 === -1) {
            setGalleryKisilwa(prev => {
                return { index: prev.picList.length - 1, picList: prev.picList }
            })
        } else {
            setGalleryKisilwa(prev => {
                return { index: prev.index - 1, picList: prev.picList }
            })
        }
    }

    return (
        <>
            <Container>

                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <img className="map" src={map} alt="" />
                    </Col>
                    <Col>
                    </Col>
                </Row>

                {/*IMMAGINI KITISI*/}
                <Row>
                    <h2 className="villageTitle">Kitisi</h2>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKitisi(0)} src={Kitisi1} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(1)} src={Kitisi2} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(2)} src={Kitisi3} alt="" />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKitisi(3)} src={Kitisi4} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(4)} src={Kitisi5} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(5)} src={Kitisi6} alt="" />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKitisi(6)} src={Kitisi7} alt="" />
                    </Col>
                    <Col></Col>
                </Row>


                {/*IMMAGINI KISILWA*/}
                <Row>
                    <h2 className="villageTitle">Kisilwa</h2>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKisilwa(0)} src={Kisilwa1} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(1)} src={Kisilwa2} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(2)} src={Kisilwa3} alt="" />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKisilwa(3)} src={Kisilwa4} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(4)} src={Kisilwa5} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(5)} src={Kisilwa6} alt="" />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKisilwa(6)} src={Kisilwa7} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(6)} src={Kisilwa8} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(6)} src={Kisilwa9} alt="" />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <img className="image" onClick={() => handleShowGalleryKisilwa(6)} src={Kisilwa10} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKisilwa(6)} src={Kisilwa11} alt="" />
                    </Col>
                    <Col></Col>
                </Row>

            </Container>

            {/*GALLERIA KITISI*/}
            <Modal show={showGalleryKitisi} onHide={handleCloseGalleryKitisi}>
                <Modal.Header closeButton>
                    <Modal.Title>Kitisi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalImage small={galleryKitisi.picList[galleryKitisi.index]} />
                    <div className="photoDescription"><span>{descriptionsKitisi[galleryKitisi.index]}</span></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="indietroButton" variant="success" onClick={onClickPreviousKitisi}> indietro </Button>
                    <Button classname="avantiButton" variant="success" onClick={onClickNextKitisi}> Avanti </Button>
                </Modal.Footer>
            </Modal>

            {/*GALLERIA KISILWA*/}
            <Modal show={showGalleryKisilwa} onHide={handleCloseGalleryKisilwa}>
                <Modal.Header closeButton>
                    <Modal.Title>Kisilwa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalImage small={galleryKisilwa.picList[galleryKisilwa.index]} />
                    <div className="photoDescription"><span>{descriptionsKisilwa[galleryKisilwa.index]}</span></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="indietroButton" variant="success" onClick={onClickPreviousKisilwa}> indietro </Button>
                    <Button classname="avantiButton" variant="success" onClick={onClickNextKisilwa}> Avanti </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default PTvillaggi;
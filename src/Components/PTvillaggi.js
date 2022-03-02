import React, { useState } from 'react';
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
import map from '../Images/Mappa.jpg'
import Kitisi1 from '../Images/Kitisi 1.JPG'
import Kitisi2 from '../Images/Kitisi 2.jpg'
import Kitisi3 from '../Images/Kitisi 3.jpg'
import Kitisi4 from '../Images/Kitisi 4.jpg'
import Kitisi5 from '../Images/Kitisi 5.JPG'
import Kitisi6 from '../Images/Kitisi 6.JPG'
import Kitisi7 from '../Images/Kitisi 7.JPG'

function PTvillaggi(props) {
    
    //KITISI
    const [showGalleryKitisi, setShowGalleryKitisi] = useState(false);
    const handleCloseGalleryKitisi = () => setShowGalleryKitisi(false);
    const [galleryKitisi, setGalleryKitisi] = useState({
        index: 0,
        picList: [Kitisi1, Kitisi2, Kitisi3, Kitisi4, Kitisi5, Kitisi6, Kitisi7]
    })

    const descriptions = [ 
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
                <Row>
                    <h2>Kitisi</h2>
                    <Col>
                        <img className="image" onClick={() => handleShowGalleryKitisi(0)} src={Kitisi1} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(1)} src={Kitisi2} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(2)} src={Kitisi3} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(3)} src={Kitisi4} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(4)} src={Kitisi5} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(5)} src={Kitisi6} alt="" />
                        <img className="image" onClick={() => handleShowGalleryKitisi(6)} src={Kitisi7} alt="" />
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>

            
             <Modal show={showGalleryKitisi} onHide={handleCloseGalleryKitisi}>
                <Modal.Header closeButton>
                    <Modal.Title>Kitisi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalImage small={galleryKitisi.picList[galleryKitisi.index]} />
                    <div className="photoDescription"><span>{descriptions[galleryKitisi.index]}</span></div>
                </Modal.Body>
                <Modal.Footer>
                <Button className="indietroButton" variant="success" onClick={onClickPreviousKitisi}> indietro </Button>
                <Button classname="avantiButton" variant="success" onClick={onClickNextKitisi}> Avanti </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default PTvillaggi;
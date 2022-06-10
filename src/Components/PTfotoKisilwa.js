import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
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

function PTfotoKisilwa(props) {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        }
    ];

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
        <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default PTfotoKisilwa;
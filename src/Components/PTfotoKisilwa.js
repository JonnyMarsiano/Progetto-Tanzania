import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
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

    const images = [
        {
            original: Kisilwa1,
            originalHeight: 5000,
            description: descriptionsKisilwa[0]
        },
        {
            original: Kisilwa2,
            originalHeight: 5000,
            description: descriptionsKisilwa[1]
        },
        {
            original: Kisilwa3,
            originalHeight: 5000,
            description: descriptionsKisilwa[2]
        },
        {
            original: Kisilwa4,
            originalHeight: 5000,
            description: descriptionsKisilwa[3]
        },
        {
            original: Kisilwa5,
            originalHeight: 5000,
            description: descriptionsKisilwa[4]
        },
        {
            original: Kisilwa6,
            originalHeight: 5000,
            description: descriptionsKisilwa[5]
        },
        {
            original: Kisilwa7,
            originalHeight: 6000,
            description: descriptionsKisilwa[6]
        },
        {
            original: Kisilwa8,
            originalHeight: 6000,
            description: descriptionsKisilwa[7]
        },
        {
            original: Kisilwa9,
            originalHeight: 6000,
            description: descriptionsKisilwa[8]
        },
        {
            original: Kisilwa10,
            originalHeight: 6000,
            description: descriptionsKisilwa[9]
        },
        {
            original: Kisilwa11,
            originalHeight: 6000,
            description: descriptionsKisilwa[10]
        }
    ];

    return (
        <>
            <div className="gallery">
                <ImageGallery
                    items={images}
                    startIndex={props.photoToShow}
                    showPlayButton={false}
                    showBullets={true}
                    showFullscreenButton={false}
                    useBrowserFullscreen={false}
                />
                <Link to="/kisilwa"><AiOutlineClose className="galleryButton" size="40px" color="white"/></Link>
            </div>
        </>
    );
}

export default PTfotoKisilwa;
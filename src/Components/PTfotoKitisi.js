import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Kitisi1 from '../Images/Kitisi/Kitisi 1.JPG'
import Kitisi2 from '../Images/Kitisi/Kitisi 2.jpg'
import Kitisi3 from '../Images/Kitisi/Kitisi 3.jpg'
import Kitisi4 from '../Images/Kitisi/Kitisi 4.jpg'
import Kitisi5 from '../Images/Kitisi/Kitisi 5.JPG'
import Kitisi6 from '../Images/Kitisi/Kitisi 6.JPG'
import Kitisi7 from '../Images/Kitisi/Kitisi 7.JPG'

function PTfotoKitisi(props) {
    
    const descriptionsKitisi = [
        "Accoglienza bambini",
        "Scorcio del villaggio di Kitisi al tramonto",
        "Grande acacia all’ingresso di Kitisi, funge anche da stazione bus",
        "Padre Salvatore utilizza il grande albero come confessionale, di fronte alla chiesa di Kitisi",
        "Domenica, dopo la celebrazione della messa, bambini che condividono il pranzo, prima offerto agli ospiti",
        "Chiesa di Kitisi"
    ];

    const images = [
        {
            original: Kitisi1,
            originalHeight: 5000,
            description: descriptionsKitisi[0]
        },
        {
            original: Kitisi2,
            originalHeight: 5000,
            description: descriptionsKitisi[1]
        },
        {
            original: Kitisi3,
            originalHeight: 5000,
            description: descriptionsKitisi[2]
        },
        {
            original: Kitisi4,
            originalHeight: 5000,
            description: descriptionsKitisi[3]
        },
        {
            original: Kitisi5,
            originalHeight: 5000,
            description: descriptionsKitisi[4]
        },
        {
            original: Kitisi6,
            originalHeight: 5000,
            description: descriptionsKitisi[5]
        },
        {
            original: Kitisi7,
            originalHeight: 6000,
            description: descriptionsKitisi[6]
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

export default PTfotoKitisi;
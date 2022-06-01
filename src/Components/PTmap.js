import { Row, Col, Container, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom"
import map from '../Images/Mappa.jpg'


function PTvillaggi(props) {

    const popoverKitisi = (
        <Popover id="popover-basic popover">
            <Popover.Header as="h3">Villaggio di Kitisi</Popover.Header>
            <Popover.Body>
                <Link to="/kitisi">Viaggia nel villaggio</Link>
            </Popover.Body>
        </Popover>
    );

    const popoverKisilwa = (
        <Popover id="popover-basic popover">
            <Popover.Header as="h3">Villaggio di Kisilwa</Popover.Header>
            <Popover.Body>
                <Link to="/kisilwa">Viaggia nel villaggio</Link>
            </Popover.Body>
        </Popover>
    );

    const popoverMapogoro = (
        <Popover id="popover-basic popover">
            <Popover.Header as="h3">Villaggio di Mapogoro</Popover.Header>
            <Popover.Body>
                <Link to="/kisilwa">Viaggia nel villaggio</Link>
            </Popover.Body>
        </Popover>
    );

    const popoverRuahaNationalPark = (
        <Popover id="popover-basic popover">
            <Popover.Header as="h3">Ruaha National Park</Popover.Header>
            <Popover.Body>
                <Link to="/kisilwa">Viaggia nel parco</Link>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Container>
                <Row>
                    <Col className="map">
                        <img src={map} width="769" height="542" border="0" usemap="#map" className="center"/>
                        <map name="map">
                            <area shape="poly" coords="3,55,87,35,102,39,110,67,3,93,1,62" alt="Ruaha National Park" href="/ruahanationalpark" />
                            <area shape="poly" coords="124,157,140,148,197,145,208,158,197,190,143,187,125,167,124,163" alt="Villaggio di Namelok" href="/namelok" />
                            <area shape="poly" coords="364,175,360,161,360,134,432,135,442,149,436,155,408,156,403,159,392,158,384,171" alt="Villaggio di Mpalapande" href="/mpalapande" />
                            <area shape="poly" coords="521,112,535,132,552,125,572,101,573,88,530,81,528,102,524,106" alt="Villaggio di Kitisi" href="/kitisi" />
                            <area shape="poly" coords="534,241,551,251,551,269,603,280,616,266,616,251,605,250,604,235,542,223" alt="Villaggio di Kibaoni" href="/kibaoni" />
                            <area shape="poly" coords="665,292,665,310,698,327,719,305,719,290,736,286,740,270,688,270,684,286,680,293" alt="Villaggio di Idodi" href="/idodi" />
                            <area shape="poly" coords="516,321,530,313,538,303,529,293,517,292,506,296,439,296,434,309,449,314,447,328,463,331,469,335,489,336,493,332,514,331,519,318" alt="Villaggio di Mapogoro" href="/mapogoro" />
                            <area shape="poly" coords="261,313,258,305,270,288,269,278,292,277,292,281,324,283,323,279,333,279,333,281,360,283,373,294,367,299,354,299,351,312,306,317,298,328,292,328,288,323,287,315" alt="Villaggio di Tungamalenga" href="/tungamalenga" />
                            <area shape="poly" coords="46,306,50,326,94,321,104,339,130,328,133,311,119,297,85,303" alt="Villaggio di Makambalala" href="/makambalala" />
                            <area shape="poly" coords="668,387,677,378,697,377,701,380,719,382,718,387,735,390,739,385,747,386,747,391,756,395,759,410,750,412,747,405,716,403,715,406,706,403,698,401,688,408,672,403" alt="Villaggio di Ilamba" href="/ilamba" />
                            <area shape="poly" coords="506,367,525,391,515,392,517,412,595,411,586,397,575,392,545,395,557,381,546,372,532,362,520,359" alt="Villaggio di Kitanewa" href="/kitanewa" />
                            <area shape="poly" coords="77,375,115,373,115,370,148,366,157,375,156,388,135,393,124,394,116,395,113,392,81,394" alt="Villaggio di Makifu" href="/makifu" />
                            <area shape="poly" coords="207,384,212,394,225,398,236,397,254,397,253,409,267,410,269,398,287,399,274,384,249,379,245,373,222,372" alt="Villaggio di Isanga" href="/isanga" />
                            <area shape="poly" coords="131,433,134,447,158,453,166,451,165,448,210,443,210,449,219,450,224,443,234,441,227,429,209,429,204,425,200,425,198,429,185,431,180,427,173,428,165,428,155,428,146,427" alt="Villaggio di Mahuninga" href="/mahuninga" />
                            <area shape="poly" coords="5,507,10,529,20,525,23,537,37,538,39,540,55,534,53,519,46,511,68,504,54,491,30,496,13,500" alt="Villaggio di Kisilwa" href="/kisilwa" />
                            <area shape="poly" coords="177,486,181,507,190,509,204,501,206,497,239,493,249,498,256,491,247,476,226,475,204,478,191,481" alt="Villaggio di Mahove" href="/mahove" />
                            <area shape="poly" coords="235,527,247,511,261,509,265,514,282,513,304,517,317,510,326,518,334,528,332,533,320,531,281,531,271,536,259,534,249,538,240,536" alt="Villaggio di Ikwavila" href="/ikwavila" />
                            <area shape="poly" coords="331,466,342,483,362,487,364,480,419,478,403,461,361,460,349,456,339,460" alt="Villaggio di Malunde" href="/malunde" />
                        </map>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PTvillaggi;
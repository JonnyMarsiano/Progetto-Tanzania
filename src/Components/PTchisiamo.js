import { Row, Col, Container } from "react-bootstrap";
import logo from '../Images/Logo.jpg'

function PTchisiamo(props){
    return(
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                    <img className="bigLogo" src={logo} alt=""/>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col xs={8}>
                    <p className="paragraph">Il Progetto Tanzania nasce nel Novembre 2014, per volere dell'allora Ambasciatore d'Italia in Tanzania, S.E. dott. Luigi Scotto (attualmente Coordinatore degli Affari degli Stati dell'Africa Meridionale presso il Ministero degli Esteri), e pertanto con gli auspici dell'Ambasciata d'Italia, con la benevolenza del Vescovo della Diocesi di Iringa, Monsignor Tarcisius Ngalalekumtwa.</p>
                    <p className="paragraph">Il fine del Progetto è quello di aiutare padre Salvatore Ricceri, sacerdote missionario Fidei Donum, siciliano di Biancavilla, nella costruzione o nel completamento di scuole, ma anche nella esecuzione di lavori utili o necessari presso le comunità che fanno parte della sua Parrocchia, quali costruzioni di pozzi, sistemazione aule e dormitori scolastici, e persino elettrificazione di alcuni villaggi nei dintorni della missione.</p>
                    <p className="paragraph">La missione di padre Salvatore Ricceri si trova nel cuore della Tanzania, Regione di Iringa, territorio di Idodi, al limitare del Ruaha National Park, esattamente nella savana degli altipiani, terra dei Masai.</p>
                    <p className="paragraph">Il Progetto Tanzania, laggiù, ha finora completato una importante scuola superiore a Migoli (1800 studenti); costruito ex novo una scuola elementare a Kisilwa, villaggio nel fitto della savana; rifinito i lavori di due scuole materne, a Mapogoro e a Tungamalenga; completato due aule e la casa degli insegnanti presso la scuola elementare di Kitanewa/Mapogoro; contribuito a sistemare i dormitori di Idodi, bruciati da un incendio; iniziato i lavori per portare la luce a Kitisi. Attualmente il Progetto Tanzania sta aiutando padre Salvatore nel portare avanti i lavori alla Scuola Secondaria “Giovanni Paolo II” di Kitanewa, per la quale ha contribuito alla costruzione ed al completamento di un dormitorio, ha dotato di attrezzature il laboratorio di Biologia e Chimica, ha acquistato computer per l'aula di Informatica, e sta contribuendo all'acquisto di libri per la nuova biblioteca.</p>
                    <p className="paragraph">A seguito di una importante richiesta pervenuta dal villaggio di Makifu, importante snodo a circa 35 km dalla missione, il Progetto Tanzania ha portato avanti dapprima la costruzione di un laboratorio di Chimica completo di tutte quante le attrezzature: successivamente ha contribuito alla costruzione di altre tre aule. I lavori a Makifu proseguono, permettendo così ai ragazzi dei villaggi limitrofi di raggiungere una scuola superiore abbastanza vicina, e nel 2021 sono stati sostenuti oltre 70 studenti con il pagamento delle loro rette annuali, assicurando loro un frequenza altrimenti impossibile.</p>
                    <p className="paragraph">Come detto, oltre ad aver pagato le spese governative per portare la luce al villaggio di Kitisi, il Progetto Tanzania ha contribuito – anche grazie a benefattori – ad attivare tre pozzi per l'acqua: uno a Kitanewa, e due di diverse dimensioni a Idodi. Sono stati inoltre effettuati lavori di manutenzione alla scuola materna di Mahuninga, e donate piccole somme all'ospedale di Migoli, struttura che accoglie i malati di HIV, per il tramite dell'Ambasciatore Luigi Scotto.</p>
                    <p className="paragraph">Il simbolo del Progetto Tanzania è Frank, ragazzino Masai caduto da un albero mentre giocava all'uscita di scuola, ed in seguito rimasto paralizzato per colpa di una lesione alla colonna vertebrale riportata nella caduta. Grazie a Frank ed alla sua famiglia, il Progetto Tanzania – che in questi anni ha provveduto ad assistere e a far curare il ragazzino – è entrato a far parte della comunità Masai presente in quel territorio della Regione di Iringa. Allo stesso modo, tra il 2016 ed il 2021, il Progetto Tanzania ha seguito le vicende del piccolo Israel, ragazzino di Migoli nato con una malformazione cardiaca, partecipando alle spese sostenute per i medicinali, gli interventi e le cure mediche. Oggi il ragazzino ha appena compiuto il suo 18° anno, festeggiato in Sicilia, ed è tornato a frequentare quella “Julius Nyerere High School” che è stata la prima impresa del nostro Progetto.</p>
                    <p className="paragraph">Per il 2022 l'intento è quello di continuare a sostenere gli studenti, questa volta principalmente quelli della Scuola Superiore di Kitanewa: sia pagando le loro rette annuali, sia contribuendo all'acquisto dei libri per la biblioteca, attualmente in corso di completamento.</p>
                    <p>Asante sana!</p>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default PTchisiamo;
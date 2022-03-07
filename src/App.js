import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Row, Container } from "react-bootstrap";
import PTheader from './Components/PTheader';
import PThomepage from './Components/PThomepage';
import PTchisiamo from './Components/PTchisiamo';
import PTmap from './Components/PTmap';
import PTKitisi from './Components/PTKitisi';
import PTfotoKitisi from './Components/PTfotoKitisi';
import PTKisilwa from './Components/PTKisilwa';
import PTfotoKisilwa from './Components/PTfotoKisilwa';

function App() {

  const [photoToShow, setPhotoToShow] = useState(0);

  return (
    <Container fluid>

      <Router>
        <Routes>
          <Route exact path="/" element={
            <><Row>
              <PTheader />
            </Row>
              <Row>
                <PThomepage />
              </Row>
            </>
          } />
          <Route path="/chisiamo" element={
            <><Row>
              <PTheader />
            </Row>
              <Row>
                <PTchisiamo />
              </Row>
            </>
          } />
          <Route path="/villaggi" element={
            <><Row>
              <PTheader />
            </Row>
              <Row>
                <PTmap />
              </Row>
            </>
          } />
          <Route path="/kitisi" element={
            <><Row>
              <PTheader />
            </Row>
              <Row>
                <PTKitisi setPhotoToShow={setPhotoToShow}/>
              </Row>
            </>
          } />
          <Route path="/kitisi/gallery" element={
            <Row>
              <PTfotoKitisi photoToShow={photoToShow}/>
            </Row>
          } />
          <Route path="/kisilwa" element={
            <><Row>
              <PTheader />
            </Row>
              <Row>
                <PTKisilwa setPhotoToShow={setPhotoToShow}/>
              </Row>
            </>
          } />
          <Route path="/kisilwa/gallery" element={
            <Row>
              <PTfotoKisilwa photoToShow={photoToShow}/>
            </Row>
          } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

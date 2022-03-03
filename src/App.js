import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Row, Container } from "react-bootstrap";
import PTheader from './Components/PTheader';
import PThomepage from './Components/PThomepage';
import PTchisiamo from './Components/PTchisiamo';
import PTmap from './Components/PTmap';
import PTKitisi from './Components/PTKitisi';
import PTKisilwa from './Components/PTKisilwa';

function App() {
  return (
    <Container fluid>

      <Row>
        <PTheader />
      </Row>

      <Router>
        <Routes>
          <Route exact path="/" element={
            <Row>
              <PThomepage />
            </Row>
          } />
          <Route path="/chisiamo" element={
            <Row>
              <PTchisiamo />
            </Row>
          } />
          <Route path="/villaggi" element={
            <Row>
              <PTmap />
            </Row>
          } />
          <Route path="/kitisi" element={
            <Row>
              <PTKitisi />
            </Row>
          } />
          <Route path="/kisilwa" element={
            <Row>
              <PTKisilwa />
            </Row>
          } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Row, Container } from "react-bootstrap";
import PTheader from './Components/PTheader';
import PThomepage from './Components/PThomepage';
import PTchisiamo from './Components/PTchisiamo';

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
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

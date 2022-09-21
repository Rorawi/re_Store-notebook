import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { Container,Row,Col } from "react-bootstrap";
import AddNotes from './components/AddNotes';
import SeeAllNotes from './components/SeeAllNotes';
function App() {
  // const [notes, setNotes] = useState([
  //   {
  //     notes_title:"React",
  //     date: "22/03/2022",
  //     note_text: "I was learning react"
  //   },
  //   {
  //     notes_title:"React",
  //     date: "22/03/2022",
  //     note_text: "I was learning react"
  //   },
  //   {
  //     notes_title:"React",
  //     date: "22/03/2022",
  //     note_text: "I was learning react"
  //   }
  // ])
  

  return (
   <>
   <Container>
    <Row>
      <Col>
      <AddNotes/>
      </Col>
      <Col>
     <SeeAllNotes />
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;

// import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/bg.jpg';
import {Card, Button} from 'react-bootstrap';
function CardProjet({image}) {
    return (
    <Card style={{ width: '18rem' , margin: '20px'}}>
    <Card.Img variant="top" src={image} style={{ height: '200px' }} />
    <Card.Body>
      <Card.Title>Women digital Academy</Card.Title>
      <Card.Text>
      Accompagnez des entrepreneurs passionnés dans la structuration d'une filière équitable et respectueuse de l'environnement.
      </Card.Text>
      <Button variant="primary">En savoir plus</Button>
    </Card.Body>
  </Card>
  );
  }
  
  export default CardProjet
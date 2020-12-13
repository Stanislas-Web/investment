// import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/bg.jpg';
import Carousel from './Carousel'
import CardProjet from './CardProjet';
import slide1 from '../assets/slide1.jpg';
import bg4 from '../assets/bg4.jpg';
import bg2 from '../assets/bg2.jpg'

const TitleStyle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 36px;
    text-align: center;
`;

const ProjetSection = styled.div`
    padding: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`;



function ProjetALaUne() {
    return (
            <div>
                <br/>
                <br/>
                <TitleStyle>Projets à la une</TitleStyle>
                <br/>
                
                <ProjetSection>
                      <CardProjet image={bg2}/>
                      <CardProjet image={bg2}/>
                      <CardProjet image={bg2}/>
                </ProjetSection>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
  export default ProjetALaUne;
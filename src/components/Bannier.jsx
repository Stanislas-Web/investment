// import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/bg.jpg';
import Carousel from './Carousel'

const BannierStyle = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 500px;
background-repeat: no-repeat;
background-size: auto;
background-image: url(${img});
`;

const H1Style = styled.h1`
font-size: 48px;
width:698px;
line-height: 56px;
text-align: center;
color: white;
font-weight: 100;
font-family: 'Roboto', sans-serif;
`;

function Bannier() {
    return <Carousel/>
    // return  <BannierStyle>
    //             <H1Style> Nous rapprochons les entrepreneurs et investisseurs </H1Style>
    //             <br/>
    //             <Button color="white" width="200px" height="50px" title="Investir" background="#2988CC" marginLeft="0" fontSize="18px"/>
    //         </BannierStyle>
  }
  
  export default Bannier
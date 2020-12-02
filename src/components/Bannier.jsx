import styled from 'styled-components';
import img from '../assets/bg.jpg'

const BannierStyle = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 500px;
background-repeat: no-repeat;
background-size: auto;
background-image: url(${img});
`;

const H1Style = styled.h1`
font-size: 48px;
font-weight: 200;
width:698px;
line-height: 56px;
text-align: center;
font-family: "roboto", Helvetica Neue, Helvetica, sans-serif;
color: white;
`;

function Bannier() {
    return  <BannierStyle>
                <H1Style> Nous rapprochons les entrepreneurs et investisseurs </H1Style>
                
            </BannierStyle>
  }
  
  export default Bannier
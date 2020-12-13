import styled from 'styled-components';
import bg1 from '../assets/bg.jpg';
import bg2 from '../assets/bg2.jpg';
import {Carousel} from 'react-bootstrap';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';



const TitleCarousel = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 48px;
`;

const CarouselStyle = styled(Carousel.Item)`
  height: 500px;
  width:  100%;

`;

const ButtonInvestir = styled.div`
  color: white;
  width: 300px;
  height: 50px;
  background: #2988CC;
  border: 1px solid #2988CC;
  border-radius: 5px;
  font-weight: 300;
  font-size: 18;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const AlignButton = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
function CarouselBannier() {
    return  <Carousel>
    <CarouselStyle>
      <img
        className="d-block w-100 h-100"
        src={slide2}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <TitleCarousel>Nous rapprochons les entrepreneurs et investisseurs </TitleCarousel>
      <br/>
      <AlignButton>
            <ButtonInvestir>Investir</ButtonInvestir>
        </AlignButton>
        <br/>
        <br/>

      
      

      </Carousel.Caption>
    </CarouselStyle>
    <CarouselStyle>
      <img
        className="d-block w-100"
        src={slide1}
        alt="Third slide"
      />
  
      <Carousel.Caption>
      <TitleCarousel>Nous rapprochons les entrepreneurs et investisseurs </TitleCarousel>
      <br/>
      <AlignButton>
            <ButtonInvestir>Investir</ButtonInvestir>
        </AlignButton>
        <br/>
        <br/>
      </Carousel.Caption>
    </CarouselStyle>
    <CarouselStyle>
      <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
      <TitleCarousel>Nous rapprochons les entrepreneurs et investisseurs </TitleCarousel>
      <br/>
      <AlignButton>
            <ButtonInvestir>Investir</ButtonInvestir>
        </AlignButton>
        <br/>
        <br/>
      </Carousel.Caption>
    </CarouselStyle>
  </Carousel>
  }
  
  export default CarouselBannier
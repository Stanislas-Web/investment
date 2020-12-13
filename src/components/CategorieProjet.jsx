import styled from 'styled-components';
import img from '../assets/bg.jpg';
import Carousel from './Carousel'
import CardProjet from './CardProjet';
import slide1 from '../assets/slide1.jpg';
import bg4 from '../assets/bg4.jpg';
import bac from '../assets/bac.jpg';
import CardCategorie from '../components/CategorieCard';


const TitleStyle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 36px;
    text-align: center;
`; 


const ContainerCategorie = styled.div`
    background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
        rgba(255,255,255, 0.8),
        rgba(255,255,255, 0.8)
    ),
    /* bottom, image */
    url('${bac}');
    height: 800px;
    width: 100%;
    background-size: cover;
`;

const ProjetSection = styled.div`
    padding: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`;

function CategorieProjet(){
    return(
        <ContainerCategorie>
            <br/>
                <br/>
                <TitleStyle>Nos Catégories</TitleStyle>
                <br/>
                <ProjetSection>
                    <CardCategorie/>
                    <CardCategorie/>
                    <CardCategorie/>
                    <CardCategorie/>
                    <CardCategorie/>
                    <CardCategorie/>
                   
                </ProjetSection>

        </ContainerCategorie>
    );
}

export default CategorieProjet;
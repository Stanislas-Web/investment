import styled from 'styled-components';
import alimentation from '../assets/alimentation.png';



const TitleStyle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    text-align: center;
`; 



const CardCategorie = styled.div`
    background: white;
    width: 337px;
    height: 221px;
    margin: 20px;
    border-radius: 10px;
    border : 1px solid #C4C4C4;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

function CategorieCard(){
    return(
                    <CardCategorie>
                        <img src={alimentation} />
                        <TitleStyle>Alimentation et Boissons</TitleStyle>
                    </CardCategorie>
 
    );
}

export default CategorieCard;
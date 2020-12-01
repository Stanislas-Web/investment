import styled from 'styled-components';
import logo from '../assets/logo.png';


const HeaderStyle = styled.header`
display:flex;
padding:0 50px;
height: 80px;
justify-content:  space-between;
align-items: center;
`;

const ImgStyle = styled.img`
height:50px;
width:55px;

`;

const NavStyle = styled.nav`
display:flex;
align-items: center;

li{
    list-style-type: none;
    margin : 0 5px;
    font-size: 15px;
    font-weight: 300;
    font-family: "roboto", Helvetica Neue, Helvetica, sans-serif;
}
`;

function Header() {
    return  <HeaderStyle>
                
                 <ImgStyle src={logo}/>
                 <NavStyle>
                     <li>Accueil</li>
                     <li>Investir</li>
                     <li>Lever des Fonds</li>
                     <li>Témoignages</li>
                 </NavStyle>
            </HeaderStyle>
  }
  
  export default Header
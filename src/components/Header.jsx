import styled from 'styled-components';
import logo from '../assets/logo.png';
import Link from 'next/link';
import { useRouter } from "next/router";
import Button from './Button';



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
    margin : 0 10px;
    font-size: 15px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: black;
    a{
        text-decoration: none;
        color: #39374E;
    }
}
.active{
    border-bottom: 1px solid #2988CC;
}


`;



function Header() {
    const router = useRouter();
    return  <HeaderStyle>
                
                 <ImgStyle src={logo}/>
                 <NavStyle>
                 
                    <li className={router.pathname == "/" ? "active" : ""}>
                        <Link href="/">
                        <a>Accueil</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/investir" ? "active" : ""}>
                        <Link href="/investir">
                        <a>Investir</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/leverdesfonds" ? "active" : ""}>
                        <Link href="/leverdesfonds">
                        <a>Lever des Fonds</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/temoignages" ? "active" : ""}>
                        <Link href="/temoignages">
                        <a>Témoignages</a>
                        </Link>
                    </li>
                    <Button color="#39374E" width="150px" height="40px" background="white" title="Se Connecter" marginLeft="5px" fontSize="14px"/>
                    <Button color="white" width="150px" height="40px" background="#2988CC" title="S'Inscrire" marginLeft="5px" fontSize="14px"/>
                 </NavStyle>
            </HeaderStyle>
  }
  
  export default Header
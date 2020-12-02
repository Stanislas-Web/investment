import styled from 'styled-components';
import logo from '../assets/logo.png';
import Link from 'next/link';
import { useRouter } from "next/router";



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
        color: black;
    }
}
.active{
    border-bottom: 1px solid blue;
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
                
                 </NavStyle>
            </HeaderStyle>
  }
  
  export default Header
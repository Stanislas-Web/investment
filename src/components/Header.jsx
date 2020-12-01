import styled from 'styled-components';
const logo = require('../assets/logo.png');


const NavBar = styled.header`
font-size: 50px;
border: 2px solid red;
display:flex;
height:60px;
`;

function Header() {
    return  <NavBar>
                {/* <img src={logo}/>
                 */}
                 <img src={logo} />
            </NavBar>
  }
  
  export default Header
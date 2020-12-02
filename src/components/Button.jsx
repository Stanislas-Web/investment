import styled from 'styled-components';


function Bannier({color, width, height, background, title, marginLeft, fontSize}) {

    const ButtonStyle = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${color};
    width: ${width};
    height: ${height};
    background: ${background};
    border: 1px solid #2988CC;
    border-radius: 5px;
    font-weight: 300;
    font-size: ${fontSize};
    font-family: 'Roboto', sans-serif;
    margin-left: ${marginLeft};
    `;

    const MyHover = styled.div`
    &:hover ${ButtonStyle} {
        // width: 202px;
        // height: 52px;
        cursor: pointer;
    }
`;


    return  <MyHover>
                <ButtonStyle>{title}</ButtonStyle>
            </MyHover>
  }
  
  export default Bannier
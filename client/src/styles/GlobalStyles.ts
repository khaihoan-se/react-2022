import styled, { createGlobalStyle } from 'styled-components';
import { sizes, colors, fonts } from 'styles/Variables';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${fonts.fontBase};
    font-weight: 400;
    background-color: #fcfcfe;
    color: ${colors.colorText};
    font-size: ${sizes.sizeBase};
}
a {
    text-decoration: none;
    outline: none;
}
button {
    outline: none;
}
li {
    list-style: none;
}
img {
    width: 100%;
    height: 100%;
}
`
export const Containers = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
`;

export default GlobalStyle;
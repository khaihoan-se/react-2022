import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=PT+Serif+Caption:ital@0;1&display=swap');
/* @font-face {
    font-family: "The Scientist";
    src: url("./fonts/TheScientistRegular.woff2") format("woff2"),
        url("./fonts/TheScientistRegular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  } */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    /* font-family: 'PT Serif Caption', serif; */
    font-size: 16px;
    font-weight: 400;
    background-color: #ffffff;
    color: #090b2b;
}
a {
    text-decoration: none;
    outline: none;
}
li {
    list-style: none;
}
`
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const LogoDiv = styled.div`
    & a {
        font-size: 18px;
        font-weight: 700;
        font-family: "The Scientist";
        text-decoration: none;
        outline: none;
    }
`;
export default GlobalStyle;
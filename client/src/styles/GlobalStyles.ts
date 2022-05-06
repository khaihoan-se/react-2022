import styled, { createGlobalStyle } from 'styled-components';
import { sizes, colors, fonts } from 'styles/Variables';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=PT+Serif+Caption:ital@0;1&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${fonts.fontBase};
    font-weight: 400;
    background-color: #ffffff;
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

// Style for the Button
export const Buttons = styled.button`
    padding: 0.625rem 0.75rem;
    outline: none;
    border-radius: .25rem;
    background-color: ${colors.colorMain};
    color: ${colors.colorWhite};
    line-height: 1;
    font-size: ${sizes.sizeMenu};
    opacity: 1;
    cursor: pointer;
    border: 1px solid transparent;
    box-shadow: rgb(0 0 0 / 8%) 0px 0.1px 0.7px, rgb(0 0 0 / 12%) 0px 0.4px 2.2px, rgb(0 0 0 / 20%) 0px 2px 10px;
    transition: box-shadow 0.3s ease-out 0s, transform 0.2s linear 0s, background-color 0.2s linear 0s;
    transform: translateY(0px) scale(1.001);
    display: flex;
    align-items: center;
    transition: all .4s;
    font-family: ${fonts.fontHeading};
    &:hover svg {
       transform: translateX(5px);
    }   
    svg {
        background: transparent;
        margin-left: 2px;
        width: 15px;
        fill: #fff;
        transition: all .4s;
    }
`;

export const P = styled.p`
    letter-spacing: normal;
    font-size: 1.125rem;
    line-height: 1.5;
    color: rgb(64, 72, 87);
    font-weight: 400;
    margin: 0px;
`;

export default GlobalStyle;
import { Container } from 'styles/GlobalStyles';
import styled, {keyframes} from "styled-components";
import { fonts, mediaQueries, paddings } from 'styles/Variables';

interface ISactive {
    isTop: boolean;
}
interface ISMobile {
    isMenuMobile: boolean;
}
// Animation styled components
const breatheAnimation = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 80px;
    }
`;
// Header styled components
export const Nav = styled.header<ISactive>`
    width: 100%;
    padding: ${paddings.paddingHeader};
    background-color: #ffffff;
    position: ${props => props.isTop ? 'fixed' : 'relative'};
    top: ${props => props.isTop ? '0' : 'initial'};
    left: ${props => props.isTop ? '0' : 'initial'};
    right: ${props => props.isTop ? '0' : 'initial'};
    z-index: 999;
    animation-name: ${props => props.isTop ? breatheAnimation : 'none'};
    animation-duration: .3s;
    border-bottom: ${props => props.isTop ? '1px solid #e8edf4' : 'none'};
    font-family: ${fonts.fontHeading};
`;
export const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ${Container}
`;
export const HeaderMenuDesktop = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;

    ${mediaQueries.mediaQueryXS} {
        display: none;
    }
`;
export const HeaderButtonLogin = styled.div`
    display: block;
    ${mediaQueries.mediaQueryXS} {
        display: none;
    }
`;
export const HeaderLoginAvatar = styled.div`
    
`;
// Styled components Menu mobile
export const HeaderMenuMobile = styled.div<ISMobile>`
    background-color: rgb(255, 255, 255);
    border-radius: 0.25rem;
    box-shadow: rgb(0 0 0 / 2%) 0px 0.5px 0.8px, rgb(0 0 0 / 4%) 0px 1.3px 2.3px, rgb(0 0 0 / 5%) 0px 3px 5.4px, rgb(0 0 0 / 7%) 0px 10px 18px, rgb(0 0 0 / 15%) 0px 0px 64px;
    font-size: 1.1875rem;
    left: 0.5rem;
    opacity: ${props => props.isMenuMobile ? '1' : '0'};
    position: fixed;
    right: 0.5rem;
    transition: opacity 0.1s ease-out 0s, top 0.1s linear 0s, scale 0.1s ease-out 0s;
    transform: ${props => props.isMenuMobile ? 'scale(1)' : 'scale(0.5)'};
    visibility: ${props => props.isMenuMobile ? 'visible' : 'hidden'};
    top: ${props => props.isMenuMobile ? '0.5rem;' : '12rem'};
    display: none;
    z-index: 1000;
    ${mediaQueries.mediaQueryXS} {
        display: block;
    }
`;
export const HeaderMenuMobileNav = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1.25rem 1.3rem 0px;
`;
export const HeaderMenuMobileUl = styled.ul`
    padding: 1rem 1.5rem;
`;
export const HeaderButtonMenu = styled.div`
    display: none;
    ${mediaQueries.mediaQueryXS} {
        display: block;
    }
`;
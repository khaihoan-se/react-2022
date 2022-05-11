import styled from "styled-components";
import { mediaQueries } from "styles/Variables";

export const Mobile = styled.div`
   position: relative;
   width: 100%;
   min-height: 100vh;
   display: flex;
   align-items: center;
`;
export const MobileBg = styled.div`
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0 0 0/1);
`;
export const MobileBgTitle = styled.h1`
    color: rgb(107 114 128/1);
    font-size: 25vw;
    font-weight: 700;
    text-transform: uppercase;
    background: transparent;
`;
export const MobileBgDark = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0 0 0 / 0.9);
    width: 100%;
    height: 100%;
`;
export const MobileTextBox = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 10;
    position: relative;
    background: transparent;
    & p {
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2rem;
        background: transparent;
        color: rgb(209 213 219 / 1);
        ${mediaQueries.mediaQueryXS} {
            font-size: 1rem;
        }
    }
`;

export const MobileTextOne = styled.div`
    margin-bottom: 1rem;
    background: transparent;
    & span {
        background: transparent;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: rgb(209 213 219 / 1);
        & span {
            color: rgb(252 165 165/1);
        }
    }
`;

export const MobileTextBoxImg = styled.div`
    background: transparent;
    & img {
        width: 200px;
        background: transparent;
    }
`;
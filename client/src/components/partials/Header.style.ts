import { colors } from './../../styles/Variables';
import styled from "styled-components";
import { Containers } from "styles/GlobalStyles";

interface IHeaderProps {
    isTop: boolean;
}
interface HeaderMenuUlProps {
    isActive: any;
}
export const Nav = styled.nav<IHeaderProps>`
    width: 100%;
    height: 80px;
    position: ${props => props.isTop ? "fixed" : "none"};
    top: 0;
    left: 0;
    right: 0;
    border-bottom: ${props => props.isTop ? "1px solid #e8edf4" : "none"};
`;
export const Container = styled(Containers)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const HeaderLogo = styled.div`
    width: 70px;
`;
export const HeaderMenu = styled.div`
    flex: 1;
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
`;
export const HeaderMenuUl = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;
export const HeaderMenuLi = styled.li<HeaderMenuUlProps>`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    & a {
        font-size: 15px;
        color: ${props => props.isActive ? colors.colorText : "#8f96a3"};
    }
`;
export const HeaderMenuSearch = styled.div`
    min-width: 240px;
    height: 35px;
    border: 1px solid #8f96a3;
    background-color: #fff;
    border-radius: .5rem;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    & .headermenu--search {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
        &::placeholder {
            font-size: 13px;
            /* padding-left: 10px; */
        }
    }
`;
export const HeaderTools = styled.div`
    
`;
export const HeaderToolsMenu = styled.div`
    
`;
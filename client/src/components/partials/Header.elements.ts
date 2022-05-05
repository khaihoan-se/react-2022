import { Container } from 'GlobalStyles';
import styled from "styled-components";

export const Nav = styled.header`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ${Container}
`;

export const HeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const HeaderLoginAvatar = styled.div`
    
`;
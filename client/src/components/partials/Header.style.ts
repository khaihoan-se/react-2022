import styled from "styled-components";
import { Containers } from "styles/GlobalStyles";

interface IHeaderProps {
    isTop: boolean;
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
`;
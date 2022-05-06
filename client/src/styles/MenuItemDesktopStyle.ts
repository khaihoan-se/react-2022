import styled from "styled-components";
import { colors, sizes } from "styles/Variables";

interface NavItemHeaderProps {
    isActive: any;
}
export const NavItemHeader = styled.li<NavItemHeaderProps>`
    height: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    & a {
        display: flex;
        align-items: center;
        height: 100%;
    }
    & span {
        font-size: ${sizes.sizeMenu};
        color: ${props => props.isActive ? colors.colorMain : colors.colorText};
        font-weight: 500;
        font-family: 'PT Serif Caption', serif;
        padding: .5rem 0;
    }
    & svg {
        width: ${sizes.sizeMenu};
        fill: ${props => props.isActive ? colors.colorMain : colors.colorText};
    }
    &:hover .nav__item__header__ul--hover {
        visibility: visible;
        opacity: 1;
    }
`;
export const NavItemHeaderBlog = styled.div`
    min-width: 500px;
    padding: 1.2rem;
    background-color: ${colors.colorWhite};
    display: flex;
    border-radius: .25rem;
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translate(-50%, -5%);
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 4px, rgb(0 0 0 / 10%) 0px 4px 24px;
    visibility: hidden;
    opacity: 0;
    & li {
        font-size: 15px;
    }
`;
export const NavItemHeaderDev = styled.div`
    min-width: 500px;
    padding: 1.2rem;
    background-color: ${colors.colorDaemon};
    display: flex;
    border-radius: .25rem;
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translate(-50%, -5%);
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 4px, rgb(0 0 0 / 10%) 0px 4px 24px;
    visibility: hidden;
    opacity: 0;
`;
export const NavItemHeaderBlogUl = styled.ul`

`;
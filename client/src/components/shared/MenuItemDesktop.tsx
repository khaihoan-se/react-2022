import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors, sizes } from "styles/Variables";

interface NavItemProps {
    href: string;
    title: string;
    icon?: boolean;
}

const MenuItemDesktop: React.FC<NavItemProps> = ({href, title, icon}) => {
    const router = useLocation();
    const isActive = (href: string) => {
        if(router.pathname === href) return true
    }
    return (
            <NavItemHeader isActive={isActive(`${href}`)}>
                <Link to={href}>
                    <span>{title}</span>
                    {
                        icon && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                    }
                </Link>
            </NavItemHeader>
    )
}
interface NavItemHeaderProps {
    isActive: any;
}
const NavItemHeader = styled.li<NavItemHeaderProps>`
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
    }
    & svg {
        width: ${sizes.sizeMenu};
        fill: ${props => props.isActive ? colors.colorMain : colors.colorText};
    }
`;


export default MenuItemDesktop;
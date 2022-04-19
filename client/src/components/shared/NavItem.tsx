import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
    href: string;
    title: string;
    className?: string;
}

const NavItem: React.FC<NavItemProps> = ({href, title, className}) => {
    return (
        <li className={className}>
            <Link to={`${href}`}>
                {title}
            </Link>
        </li>
    )
}

export default NavItem;
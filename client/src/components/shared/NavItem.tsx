import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    href: string;
    title: string;
    icon: boolean;
    className1?: string;
    className2?: string;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({href, title, icon, className1, className2, onClick}) => {
    return (
            <Link className={className1} to={`${href}`} onClick={onClick}>
                <li className={className2}>
                    <span>{title}</span>
                    {
                        icon && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                    }
                </li>
            </Link>
    )
}

export default NavItem;
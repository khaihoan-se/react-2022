import React from "react";
import { IconType } from "../../types";

const MenuIcon:React.FC<IconType> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
    )
}

export default MenuIcon;
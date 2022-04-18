import React from "react";
import Logo from "../shared/Logo";
import LogoSrc from "../../asset/logo-coffestyle.png";
import { MENU__LIST } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";


const Header: React.FC = () => {
    const router = useLocation();
    console.log(router)
    const isActive = (href: string) => {
        if(router.pathname === href) return true
    }
    return (
        <header className="py-6 mx-10">
            <nav className="flex flex-row justify-between items-center">
                {/* Logo */}
                <Link to={'/'} className="logo basis-2/6 relative float-left no-underline text-[#333333]">
                    <Logo className="my-0 w-[112px]" src={LogoSrc} alt="Logo" />
                </Link>
                {/* Menu */}
                <ul className="basis-3/6 flex items-center justify-end gap-8 uppercase text-sm text-gray-500 font-medium">
                    {
                        MENU__LIST.map((item, index) => 
                            <li key={index}
                                className={classNames(
                                    "cursor-pointer py-1 relative",
                                    isActive(`${item.path}`) ? "text-gray-800 after:absolute after:bottom-0 after:left-0 after:bg-[#a25f4b] after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-300"
                                    : "hover:text-gray-800 after:absolute after:bottom-0 after:left-0 after:bg-[#a25f4b] after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
                                )}>
                                <Link to={`${item.path}`}>{item.title}</Link>
                            </li>
                        )
                    }
                </ul>
                {/* Cart */}
                <div className="basis-1/6">
                    <span>Cart</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
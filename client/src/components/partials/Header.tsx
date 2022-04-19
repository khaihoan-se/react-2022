import React from "react";
// import Logo from "../shared/Logo";
// import LogoSrc from "../../asset/logo-coffestyle.png";
import { MENU__LIST } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import NavItem from "../shared/NavItem";
import ShoppingIcon from "../icons/ShoppingIcon";
import MenuIcon from "../icons/MenuIcon";


const Header: React.FC = () => {
    const router = useLocation();
    const isActive = (href: string) => {
        if(router.pathname === href) return true
    }
    return (
        <header className="h-20 w-full">
            <nav className="flex justify-between items-center relative w-[940px] h-full mx-auto">
                {/* Logo */}
                <Link to={'/'} className="logo no-underline text-[#333333]">
                    <h1 className="text-2xl font-semibold">CoffeeStyle.</h1>
                </Link>
                {/* Menu */}
                <div className="flex items-center justify-center">
                    <ul className="lg:flex hidden items-center uppercase text-sm text-gray-500 font-medium">
                        {
                            MENU__LIST.map((route) => (
                                <NavItem 
                                key={route.path} 
                                href={route.path} 
                                title={route.title}
                                className={classNames(
                                    "cursor-pointer text-sm py-1 relative font-semibold mx-3 tracking-widest",
                                    isActive(`${route.path}`) ? "text-light-coffee after:absolute after:bottom-0 after:left-0 after:bg-[#a25f4b] after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-300"
                                    : "hover:text-light-coffee after:absolute after:bottom-0 after:left-0 after:bg-[#a25f4b] after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
                                )}
                                />
                            ))
                        }
                    </ul>
                    {/* Cart */}
                    <div className="flex items-center ml-6 uppercase text-sm text-light-coffee font-semibold cursor-pointer opacity-60 hover:opacity-100 transition-all ease-in-out">
                        <ShoppingIcon className="w-5 mx-2" />
                        <p><span>Cart</span></p>
                        <p><span className="w-5 h-5 bg-light-coffee rounded-full mx-2 text-[#fff] flex items-center justify-center">0</span></p>
                    </div>
                    {/* Menu Mobile */}
                    <div className="lg:hidden mx-4">
                        <MenuIcon className="w-7" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
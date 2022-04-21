import React from "react";
import { MENU__LIST } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import NavItem from "../shared/NavItem";
import ShoppingIcon from "../icons/ShoppingIcon";
import MenuIcon from "../icons/MenuIcon";


const Navbar: React.FC = () => {
    const router = useLocation();
    const isActive = (href: string) => {
        if(router.pathname === href) return true;
    }
    return (
       <header className="py-6 mx-10">
           <nav className="flex flex-row justify-between items-center">
                <Link to={'/'} className="logo basis-2/6">
                   <h1 className="text-xl text-center font-semibold text-light-coffee"><span>CoffeeStyle.</span></h1>
                </Link>

                <ul className="basis-3/6 flex items-center justify-end gap-8 uppercase text-sm text-gray-500 font-medium">
                    {
                        MENU__LIST.map((route) => (
                            <NavItem
                                key={route.path}
                                href={route.path}
                                title={route.title}
                                className={classNames(
                                    "cursor-pointer py-1 relative",
                                    isActive(`${route.path}`) 
                                    ? "text-light-coffee after:absolute after:bottom-0 after:left-0 after:bg-[#a25f4b] after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-300"
                                    : "hover:text-light-coffee after:absolute after:bottom-0 after:left-0 after:bg-[#a25f4b] after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
                                )}
                            />
                        ))
                    }
                </ul>

                <div className="basis-1/6 flex items-center">
                    <ShoppingIcon className="w-4" />
                    <p><span>Cart</span></p>
                    <p><span>0</span></p>
                </div>

                <div className="lg:hidden">
                    <MenuIcon />
                </div>
           </nav>
       </header>
    )
}

export default Navbar
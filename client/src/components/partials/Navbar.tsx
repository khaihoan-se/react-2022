import React from "react";
import { Link } from "react-router-dom";
import { MENU__LIST } from "../../constants";
import MenuIcon from "../icons/MenuIcon";
import ShoppingIcon from "../icons/ShoppingIcon";

const Navbar = () => {
    return (
       <header className="py-6">
           <nav className="flex items-center justify-between">
               <Link to={'/'}>
                   <h1><span>CoffeeStyle.</span></h1>
               </Link>

               <div className="flex items-center">
                    <ul className="flex items-center">
                        {
                            MENU__LIST.map((item) => (
                                <li>
                                    <Link to={`${item.path}`}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="flex items-center">
                        <ShoppingIcon className="w-4" />
                        <p><span>Cart</span></p>
                        <p><span>0</span></p>
                    </div>

                    <div className="lg:hidden">
                        <MenuIcon />
                    </div>
               </div>
           </nav>
       </header>
    )
}

export default Navbar
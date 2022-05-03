import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../shared/Logo";
import SearchIcon from "../icons/SearchIcon";

import LogoUrl from "../../asset/logo.png";
import { MENU__LIST } from "../../constants";
import NavItem from "../shared/NavItem";
import classNames from "classnames";
import Button from "../shared/Button";

const Header = () => {
    const [isTop, setIsTop] = useState(false);

    const router = useLocation();
    const isActive = (href: string) => {
        if(router.pathname === href) return true;
    }
    
    useEffect(() => {
        const handleScroll = () => {
          setIsTop(window.scrollY > 0);
        };
    
        document.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={classNames(
            "px-4 md:px-12 flex items-center h-16 fixed top w-full z-50 transition duration-500",
            isTop && "bg-black"
        )}>
                <Link to="/">
                    <Logo src={LogoUrl} alt="Logo" className="relative h-2/3 w-10 mr-8 rounded-full" />
                </Link>
                <ul className="hidden sm:flex items-center space-x-6 text-typography-secondary">
                    {
                        MENU__LIST.map((item) => (
                            <NavItem
                                key={item.path}
                                href={item.path}
                                title={item.title}
                                className={classNames(
                                    "hover:text-white transition font-extrabold text-lg",
                                    isActive(`${item.path}`) ? "text-red-500"
                                    : "text-gray-600"
                                )}
                            />
                        ))
                    }
                </ul>
                <div className="flex items-center space-x-4 ml-auto">
                    <Link to="/products">
                        <SearchIcon className="w-10 hover:text-red-500 transition duration-300 text-typography-secondary cursor-pointer" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Link to="/login">
                            <Button title="Đăng nhập" className="transition duration-300 px-3 py-2 rounded-md hover:bg-opacity-80 hover:bg-red-500 bg-red-500 text-white" />
                        </Link>
                    </div>
                </div>
        </header>
    )
}

export default Header;
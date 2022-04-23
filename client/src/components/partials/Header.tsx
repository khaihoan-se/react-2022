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
            "px-4 md:px-12 flex items-center h-16 fixed top-0 left-0 w-full z-50 transition duration-500 text-gray-600",
            isTop && "bg-[#fcfbfe]"
        )}>
                <Link to="/">
                    <Logo src={LogoUrl} alt="Logo" className="relative h-2/3 w-10 mr-8" />
                </Link>
                <ul className="hidden sm:flex items-center space-x-6 font-semibold text-typography-secondary">
                    {
                        MENU__LIST.map((item) => (
                            <NavItem
                                key={item.path}
                                href={item.path}
                                title={item.title}
                                className={classNames(
                                    "hover:text-black transition font-extrabold",
                                    isActive(`${item.path}`) ? "text-red-500"
                                    : "text-gray-600"
                                )}
                            />
                        ))
                    }
                </ul>
                <div className="flex items-center space-x-4 ml-auto">
                    <Link to="/products">
                        <SearchIcon className="w-10 hover:text-black transition duration-300 text-primary-500 cursor-pointer" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Button title="Đăng nhập" className="transition duration-300 px-3 py-2 rounded-md hover:bg-opacity-80 hover:bg-red-500 bg-red-500 text-white" />
                    </div>
                </div>
        </header>
    )
}

export default Header;
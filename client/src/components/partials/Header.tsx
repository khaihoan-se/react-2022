import { useState, useEffect } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { MENU__LIST } from "constants/index";
// import Button from "../shared/Button";
import Logo from "components/shared/Logo";
import NavItem from "components/shared/NavItem";
import Avatar from "components/shared/Avatar";
import LogoUrl from "asset/logo2.jpeg"

const Header = () => {
    const [isTop, setIsTop] = useState(false);
    const [isMenu, setIsMenu ] = useState(false)
    const router = useLocation();
    // menu active dựa vào router để active 
    const isActive = (href: string) => {
        if(router.pathname === href) return true;
    }
    const handleIsMenu = () => {
        setIsMenu(!isMenu)
    }
    const handleCloseActive = () => {
        setIsMenu(false)
    }
    // scroll thêm style vào header box-shadow: 0 -1px 4px rgb(0 0 0 / 15%);
    useEffect(() => {
        const handleScroll = () => {
          setIsTop(window.scrollY > 0);
        };
    
        document.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={classNames(
            "w-full fixed inset-x-0 top-0 bg-[#ffffff] h-[70px]",
            isTop && "shadow-sm"
        )}>
            <div className="container h-full flex items-center justify-between">
                {/* Logo lấy từ thư mục shared */}
                <Logo className="cursor-pointer flex items-center" />
                {/* Menu List -> constants -> MENU_LIST  */}
                <ul className={classNames(
                    "md:flex md:items-center md:h-full transition-all duration-400",
                    isMenu === true 
                    ? "flex absolute bottom-0 left-0 right-0 top-0 z-[100] w-full h-[500px] bg-[#fff] flex-col items-center justify-center shadow-sm" 
                    : "hidden"
                )}>
                    {
                        MENU__LIST.map((item) => (
                            <NavItem key={item.path} href={item.path} title={item.title} icon={item.icon} onClick={handleCloseActive}
                                className1={classNames(
                                    "flex items-center md:h-full md:mx-8 my-5 hover:text-main-cl font-semibold",
                                    isActive(`${item.path}`) ? "text-main-cl" : ""
                                )}
                                className2="flex items-center"
                            />
                        ))
                    }
                    <div className="md:hidden absolute top-8 right-8 cursor-pointer" onClick={handleIsMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </ul>
                {/* avatar && login button */}
                <div className="h-full flex items-center">
                    <div className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-full border-[3px] border-[#4f7ef8] relative cursor-pointer">
                        {/* <Link to="/login">
                            <Button title="Login" className="px-4 py-2 bg-main-cl text-[#fff] font-semibold rounded-lg hover:mb-2 transition-all duration-400" />
                        </Link> */}
                        {/* <span className="w-4 h-4 bg-main-cl rounded-full border-[3px] border-[#fff] absolute top-[-5px] right-[-5px]"></span> */}
                        <Avatar src={LogoUrl} alt={LogoUrl} className="w-full h-full rounded-full" />
                    </div>
                    <div className="block md:hidden ml-8 cursor-pointer" onClick={handleIsMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
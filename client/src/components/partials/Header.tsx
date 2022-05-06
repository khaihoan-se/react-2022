import React, { useState, useEffect } from "react"
import { 
    Nav, 
    HeaderContainer, 
    HeaderMenuDesktop, 
    HeaderMenuMobile, 
    HeaderButtonLogin, 
    HeaderButtonMenu,
    HeaderMenuMobileNav,
    HeaderMenuMobileUl
} from "components/partials/Header.elements"
import Logo from "components/shared/Logo";
import MenuItemDesktop from "components/shared/MenuItemDesktop";
import { MENU__LIST } from "constants/index";
import Button from "components/shared/Button";
import MenuItemMobile from "components/shared/MenuItemMobile";


const Header = () => {
    const [ isTop, setIsTop ] = useState(false);
    const [ isMenuMobile, setIsMenuMobile ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY > 600)
        }
        document.addEventListener('scroll', handleScroll)
    }, [])

    const handleOpenMenuMobile = () => {
        setIsMenuMobile(!isMenuMobile)
    }
    return (
        <Nav isTop={isTop}>
            <HeaderContainer>
                <Logo title="KhaiHoan" />
                {/* Menu desktop */}
                <HeaderMenuDesktop>
                    {
                        MENU__LIST.map((item: any) => (
                            <MenuItemDesktop key={item.path} href={item.path} title={item.title} icon={item.icon} />
                        ))
                    }
                </HeaderMenuDesktop>
                {/* Menu mobile */}
                <HeaderMenuMobile isMenuMobile={isMenuMobile}>
                    <HeaderMenuMobileNav>
                        <Logo title="KhaiHoan" />
                        <Button onClick={handleOpenMenuMobile} title="Close" />
                    </HeaderMenuMobileNav>
                    <HeaderMenuMobileUl>
                        {
                            MENU__LIST.map(item => (
                                <MenuItemMobile key={item.path} href={item.path} title={item.title} icon={item.icon} onClick={handleOpenMenuMobile} />
                            ))
                        }
                    </HeaderMenuMobileUl>
                </HeaderMenuMobile>
                {/* <Button title="Avatar" /> */}
                <HeaderButtonLogin>
                    <Button title="Login" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    }/>
                </HeaderButtonLogin>
                <HeaderButtonMenu onClick={handleOpenMenuMobile}>
                    <Button title="Menu" />
                </HeaderButtonMenu>
            </HeaderContainer>
        </Nav>
    )
}

export default Header;
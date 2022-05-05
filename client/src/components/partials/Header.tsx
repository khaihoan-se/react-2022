import { Nav, HeaderContainer, HeaderMenu, HeaderLoginAvatar } from "components/partials/Header.elements"
import Logo from "components/shared/Logo";
import NavItem from "components/shared/NavItem";
import { MENU__LIST } from "constants/index";


const Header = () => {
    return (
        <Nav>
            <HeaderContainer>
                <Logo />
                <HeaderMenu>
                    {
                        MENU__LIST.map((item: any) => (
                            <NavItem key={item.path} href={item.path} title={item.title} icon={item.icon} />
                        ))
                    }
                </HeaderMenu>
                <HeaderLoginAvatar>
                    Avatar
                </HeaderLoginAvatar>
            </HeaderContainer>
        </Nav>
    )
}

export default Header;
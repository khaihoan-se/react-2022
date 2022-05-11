import React, { useEffect, useState } from 'react'
import { Nav, Container, HeaderLogo, HeaderMenu, HeaderTools, HeaderMenuUl, HeaderMenuLi, HeaderMenuSearch, HeaderToolsMenu } from "components/partials/Header.style"
import Logo from 'components/shared/Logo';
import { Link, useLocation } from 'react-router-dom';
import { MENU_LIST } from 'constants/index';
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const router = useLocation();
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    const handleActiveHeader = () => {
      setIsTop(window.scrollY > 80)
    }
    document.addEventListener('scroll', handleActiveHeader)
  }, [])
  const isActive = (href: any) => {
    if(router.pathname === href) return true;
  }
  return (
    <Nav isTop={isTop}>
      <Container>
        <HeaderLogo><Link to="/"><Logo /></Link></HeaderLogo>
        <HeaderMenu>
          <HeaderMenuUl>
            {
              MENU_LIST.map(menu => (
                <HeaderMenuLi isActive={isActive(`${menu.path}`)}>
                  <Link to={`${menu.path}`}>{menu.page}</Link>
                </HeaderMenuLi>
              ))
            }
          </HeaderMenuUl>
          <HeaderMenuSearch>
            <input className='headermenu--search' type="text" placeholder='Search' />
            <FiSearch />
          </HeaderMenuSearch>
        </HeaderMenu>
        <HeaderTools>
          <HeaderToolsMenu>
          HeaderToolsMenu
          </HeaderToolsMenu>
        </HeaderTools>
      </Container>
    </Nav>
  )
}

export default Header
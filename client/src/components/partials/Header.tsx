import { useEffect, useState } from 'react'
import Logo from 'components/shared/Logo'
import { MENU_LIST } from 'constants/index'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";


const Header = () => {
   const router = useLocation(); // get router.pathname
   const [isTop, setIsTop] = useState(false); 
   const isActive = (url: string) => {
      if(router.pathname === url) return true;
   }
   useEffect(() => {
      const handleActiveHeader = () => {
         setIsTop(window.scrollY > 200)
      }

      document.addEventListener('scroll', handleActiveHeader)
   }, [])
   return (
      <header className={`header ${isTop ? 'active' : ''}`}>
         <div className="container">
            {/* Logo Header */}
            <div className="header__logo">
               <Logo />
            </div>
            {/* Header Left */}
            <div className="header__left">
               <ul className="header__left--ul">
                  {MENU_LIST.map((menu) => (
                     <Link to={`${menu.path}`}>
                        <li className={`header__left--ul--li ${isActive(`${menu.path}`) ? 'active' : ''}`}>{menu.page}</li>
                     </Link>
                  ))}
               </ul>
               <div className='header__left--search'>
                  <input type="text" placeholder='Search' />
                  <FiSearch />
               </div>
            </div>
            <div className='header__right'>Header right</div>
         </div>
      </header>
   )
}

export default Header
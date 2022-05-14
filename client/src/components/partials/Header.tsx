import Logo from 'components/shared/Logo';
import { MENU_LIST } from 'constants/index';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import AvatarUrl from "asset/logo.jpeg"


const Header = () => {
   const router = useLocation(); // get router.pathname
   const isActive = (url: string) => {
      if(router.pathname === url) return true;
   }
  
   return (
      <header className='header'>
         <div className="container">
            {/* Logo Header */}
            <div className="header__logo">
               <Link to="/"><Logo /></Link>
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
            <div className='header__right'>
               <div className="header__right--cell header__right--developer">
                  <span>
                     Manage Developer
                     <FiChevronDown />
                  </span>
               </div>
               <div className="header__right--cell header__right--notification">
                  <RiShoppingCartLine />
               </div>
               <div className="header__right--cell header__right--avatar">
                  <img src={AvatarUrl} alt="" />
               </div>
               <div className='header__right--button'>
                  <button>Create contest</button>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
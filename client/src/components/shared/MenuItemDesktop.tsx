import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItemHeader, NavItemHeaderBlog, NavItemHeaderDev, NavItemHeaderBlogUl } from "styles/MenuItemDesktopStyle";
import {BiChevronDown} from "react-icons/bi"
interface NavItemProps {
    href: string;
    title: string;
    icon?: boolean;
    tables?: any;
}

const MenuItemDesktop: React.FC<NavItemProps> = ({href, title, icon, tables}) => {
    const router = useLocation();
    const isActive = (href: string) => {
        if(router.pathname === href) return true
    }
    return (
            <NavItemHeader isActive={isActive(`${href}`)}>
                <Link to={href}>
                    <span>{title}</span>
                    {
                        icon && <BiChevronDown />
                    }
                    {
                        tables.length >= 1 && title === 'Blog' 
                        ? <NavItemHeaderBlog  className="nav__item__header__ul--hover">
                            <NavItemHeaderBlogUl>
                                {
                                    tables.map((table: any, index: number) => (
                                        <li key={index}>
                                            <Link to={`${table.path}`}>{table.table}</Link>
                                        </li>
                                    ))
                                }
                            </NavItemHeaderBlogUl>
                            <div>
                                Blog Post
                            </div>
                        </NavItemHeaderBlog>
                        : tables.length >= 1 && title === 'Developer' 
                        ? <NavItemHeaderDev  className="nav__item__header__ul--hover">
                            <NavItemHeaderBlogUl>
                                {
                                    tables.map((table: any, index: number) => (
                                        <li key={index}>{table.table}</li>
                                    ))
                                }
                            </NavItemHeaderBlogUl>
                            <div>
                                Blog Post
                            </div>
                        </NavItemHeaderDev> : ''
                    }
                </Link>
            </NavItemHeader>
    )
}


export default MenuItemDesktop;
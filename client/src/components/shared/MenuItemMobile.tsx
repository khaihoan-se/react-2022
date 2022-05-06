import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {BiChevronDown} from "react-icons/bi"

interface NavItemTypeProps {
    href: string;
    title: string;
    icon?: boolean;
    onClick?: () => void;
}
const MenuItemMobile: React.FC<NavItemTypeProps> = ({ href, title, icon, onClick }) => {
  return (
    <NavItemHeader onClick={onClick}>
      <Link to={`${href}`}>
        <span>{title}</span>
        {
          icon && <BiChevronDown />
        }
      </Link>
    </NavItemHeader>
  );
}

const NavItemHeader = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 1;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid #e8edf4;
  & a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 500;
    & span {
      font-size: 15px;
    }
    & svg {
      width: 20px;
    }
  }
`;
export default MenuItemMobile;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          icon && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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

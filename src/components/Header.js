// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.headerFooter};
  padding: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${props => props.theme.spacing.small};
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: ${props => props.theme.spacing.small};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.show ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  background: ${props => (props.isActive ? props.theme.colors.activeBackground : 'transparent')};
  padding: ${props => (props.isActive ? '0.5rem 1rem' : '0')};

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: ${props => (props.isActive ? props.theme.spacing.small : '0')} 0;
    width: 100%;
  }
`;

const ThemeSwitcher = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = ({ toggleTheme }) => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  
  // Determine if the current path matches any of the navigation links
  const isActive = (path) => location.pathname === path;

  return (
    <Nav>
      <MenuButton onClick={() => setShowNav(!showNav)}>
        ☰
      </MenuButton>
      <Logo>Bao's Portfolio</Logo>
      <NavLinks show={showNav}>
        <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
        <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
        <NavLink to="/projects" isActive={isActive('/projects')}>Projects</NavLink>
        <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
      </NavLinks>
      <ThemeSwitcher onClick={toggleTheme}>
        Toggle Theme
      </ThemeSwitcher>
    </Nav>
  );
};

export default Header;

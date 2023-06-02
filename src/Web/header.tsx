import { useState } from 'react';
import styled from 'styled-components';
import FontTT from '../fonts/Font files/otf-files/TT Tricks Regular.otf';
import logo from "../assets/default-monochrome.svg"

const HeaderWrapper = styled.div`
  @font-face {
    font-family: 'FontTT';
    src: url(${FontTT});
  }

  display: flex;
  justify-content: space-between;
  background-color: transparent;
  position: fixed;
  background-color: #230c5b;
  width: 100%;
  padding: 0 1.8rem;
  align-items: center;
  box-sizing: border-box;
  z-index: 2;
  border-bottom: 1px solid #564898;

  span {
    font-family: 'FontTT', sans-serif;
    font-weight: 500;
    color: #fff;
    line-height: 1.7rem;
    font-size: 1.2rem;
  }

  img {
    width: 170px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const MenuList = styled.ul<{ isMenuOpen: boolean }>`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: 'FontTT', sans-serif;
  font-weight: 300;
  color: #dfdfdf;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100%;
    background-color: #051f4280;
    text-align: center;
    transition: all 0.5s ease-in-out;

    ${({ isMenuOpen }) =>
      isMenuOpen
        ? `
          transform: translateY(0);
        `
        : `
          transform: translateY(-150%);
        `}
  }
`;

const MenuItem = styled.li`
  font-size: 1.1rem;
  font-family: 'FontTT', sans-serif;
  font-weight: 300;
  color: #dfdfdf;
  padding: 2rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #04d361;
  }

  @media only screen and (max-width: 768px) {
    margin: 20px 0;
    font-weight: 400;
  }
`;

const NavToggle = styled.button<{ hasFocus: boolean }>`
  border: none;
  background: none;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ hasFocus }) => (hasFocus ? '#fff' : '#c2c2c2')};

  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <HeaderWrapper>
     <img src={logo} alt="" />
      <Navigation>
        <NavToggle onClick={toggleMenu} hasFocus={isMenuOpen}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </NavToggle>
        <MenuList isMenuOpen={isMenuOpen}>
          <MenuItem>Features</MenuItem>
          <MenuItem>Learn</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Navigation>
    </HeaderWrapper>
  );
}
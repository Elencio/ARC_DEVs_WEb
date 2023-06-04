import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dfdfdf;
  position: fixed;

`;

export const Logo = styled.img`
  width: 140px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #dfdfdf;
  font-size: 1.2rem;
  margin-right: 1.5rem;
  text-decoration: none;
  font-family: "FontTT", sans-serif;

`;
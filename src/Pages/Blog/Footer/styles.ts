import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #333;
  padding: 2rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterLogo = styled.img`
 width: 140px;
`;
export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const FooterLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin-right: 2rem;
  text-decoration: none;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;

  &:hover {
    color: #ccc;
  }
`;

export const FooterLegal = styled.div`
  font-size: 1rem;
`;

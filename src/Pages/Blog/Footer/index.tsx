import logo from "../../assets/default-monochrome.svg"
import { FooterContainer, FooterLogo, FooterWrapper, FooterLegal, FooterLink, FooterNav } from "./styles"


export function Footer() {

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo src={logo} alt="Footer Logo" />
        <FooterNav>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterNav>
        <FooterLegal>
          <p>&copy; 2022 Blog Name. All rights reserved.</p>
          <p>
            Designed and developed by <a href="#">Your Name</a>.
          </p>
        </FooterLegal>
      </FooterContainer>
    </FooterWrapper>
  )

}
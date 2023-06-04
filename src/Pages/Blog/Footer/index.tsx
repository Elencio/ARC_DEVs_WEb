import React from "react"
import logo from "../../../assets/default-monochrome.svg"
import * as styled from "./styles"


export function Footer() {

  return (
    <styled.FooterWrapper>
      <styled.FooterContainer>
        <styled.FooterLogo src={logo} alt="Footer Logo" />
        <styled.FooterNav>
          <styled.FooterLink href="#">Home</styled.FooterLink>
          <styled.FooterLink href="#">About Us</styled.FooterLink>
          <styled.FooterLink href="#">Contact</styled.FooterLink>
        </styled.FooterNav>
        <styled.FooterLegal>
          <p>&copy; 2022 Blog Name. All rights reserved.</p>
          <p>
            Designed and developed by <a href="#">Your Name</a>.
          </p>
        </styled.FooterLegal>
      </styled.FooterContainer>
    </styled.FooterWrapper>
  )

}
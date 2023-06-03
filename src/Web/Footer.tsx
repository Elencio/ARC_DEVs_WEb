import styled from 'styled-components';
import FacebookIcon from "../assets/facebook-1.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import GithubIcon from "../assets/github-2.svg"

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: rgba(28, 31,38,1);
  box-shadow: 0 0 0 0.1px #c2c2c2;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  margin: 2rem;


  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin: 1rem;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 400px;
  align-items: start;
  font-family: 'FontTT', sans-serif;
  font-weight: 300;
  color: #dfdfdf;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-family: 'FontTT', sans-serif;
  font-weight: 400;
  color: #dfdfdf;
`;

const Link = styled.a`
  font-size: 1rem;
  color: #dfdfdf;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'FontTT', sans-serif;
  font-weight: 300;

  &:hover {
    color: white;
  }
`;

const FooterSocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
 
  gap: 0.4rem;

  img {
    background-color: #dfdfdf;
    padding: 0.5rem;
    border-radius: 10px;
    width: 39px;

  
  }
`

const FooterCopyright = styled.p`
  font-size: 1rem;
  margin-top: 50px;
  color: #dfdfdf;
  font-family: 'FontTT', sans-serif;
  font-weight: 300;
  line-height: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem 2rem;
  border-top: 1px solid #dfdfdf;

  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export function Footer() {
  return (
    <Container>
      <ContentContainer>
        <ColumnContainer>
          <Title>About Us</Title>
          <Description>
            Oferecer soluções inovadoras de desenvolvimento de sistemas escaláveis
          </Description>
        </ColumnContainer>
        <ColumnContainer>
          <Title>Features</Title>
          <Link href="#">Features</Link>
          <Link href="#">Personalized Recommendations</Link>
          <Link href="#">24/7 Customer Support</Link>
          <Link href="#">Contact</Link>
        </ColumnContainer>
        <ColumnContainer>
          <Title>Legal</Title>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
        </ColumnContainer>
        <ColumnContainer>
          <Title>Follow Us</Title>
          <FooterSocialMediaWrapper>
             <img src={FacebookIcon} alt="" />
             <img src={GithubIcon} alt="" />
             <img src={LinkedinIcon} alt="" />
          </FooterSocialMediaWrapper>
        </ColumnContainer>
      </ContentContainer>
      <FooterCopyright>
        &copy; {new Date().getFullYear()} by ARC-DEVs. All rights reserved | Powered by React and styled-components.
      </FooterCopyright>
    </Container>
  );
}
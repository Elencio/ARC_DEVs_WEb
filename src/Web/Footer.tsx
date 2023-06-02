import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import styled from 'styled-components';
import FontTT from '../fonts/Font files/otf-files/TT Tricks Regular.otf';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #121214;
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
  font-family: 'FontTT', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-family: 'FontTT', sans-serif;
  font-weight: 400;
  color: #c2c2c2;
`;

const Link = styled.a`
  font-size: 1rem;
  color: #c2c2c2;
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
  gap: 0.3rem;
`;

const FooterCopyright = styled.p`
  font-size: 1rem;
  margin-top: 50px;
  color: #c2c2c2;
  font-family: 'FontTT', sans-serif;
  font-weight: 300;
  line-height: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

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
            Oferecer soluções inovadoras de desenvolvimento de sistemas escaláveis para empresas, aproveitando as ferramentas e tecnologias mais recentes disponíveis.
          </Description>
        </ColumnContainer>
        <ColumnContainer>
          <Title>Features</Title>
          <Link href="#">Mobile App</Link>
          <Link href="#">Personalized Recommendations</Link>
          <Link href="#">24/7 Customer Support</Link>
          <Link href="#">Easy Budgeting</Link>
        </ColumnContainer>
        <ColumnContainer>
          <Title>Legal</Title>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
        </ColumnContainer>
        <ColumnContainer>
          <Title>Follow Us</Title>
          <FooterSocialMediaWrapper>
            <FacebookLogo size={32} weight="fill" color="#4763ff" />
            <LinkedinLogo size={32} weight="fill" color="#4763ff" />
            <InstagramLogo size={32} weight="fill" color="#d42e55" />
          </FooterSocialMediaWrapper>
        </ColumnContainer>
      </ContentContainer>
      <FooterCopyright>
        &copy; {new Date().getFullYear()} by ARC-DEVs. All rights reserved | Powered by React and styled-components.
      </FooterCopyright>
    </Container>
  );
}
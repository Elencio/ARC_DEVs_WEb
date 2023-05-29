import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7rem;
  color: white;
  padding: 2rem;

`;

const FooterUpperSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  gap: 1rem;


  & p {
    font-size: 1rem;
    max-width: 400px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2;

  }

  span {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h4 {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2

  }

  & p {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  
  }
`;

const LegalLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 50px;

  & h4 {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #c2c2c2;
  }

  & a {
    font-size: 1rem;
    color: #b3b7d0;
    text-decoration: none;
    transition: color 0.3s ease;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2;

    &:hover {
      color: white;
    }
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
  margin-top: 50px;
  color: #b3b7d0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:  1rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #121214;
  box-shadow: 0 0 0 0.1px #c2c2c2;
`
export function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <FooterUpperSection>

          <span>ARC-DEVs</span>
          <p>
          Oferecer soluções inovadoras de desenvolvimento de sistemas escaláveis para empresas, aproveitando as ferramentas e tecnologias mais recentes disponíveis.
          </p>
        </FooterUpperSection>
        <FeaturesWrapper>
          <h4>Features</h4>
          <p>Mobile App</p>
          <p>Personalized Recommendations</p>
          <p>24/7 Customer Support</p>
          <p>Easy Budgeting</p>
        </FeaturesWrapper>
        
        <LegalLinksWrapper>
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </LegalLinksWrapper>
        <SocialMediaWrapper>
          <FacebookLogo size={32} weight="fill" color='#4763ff' />
          <LinkedinLogo size={32} weight="fill" />
          <InstagramLogo size={32} weight="fill" />
        </SocialMediaWrapper>

      </FooterWrapper>
      <Copyright>
        &copy; {new Date().getFullYear()} by ARC-DEVs. All rights reserved | Powered by React and styled-components.
      </Copyright>
    </Container>
  );
}


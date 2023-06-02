import styled from 'styled-components';
import FontSpart from "../fonts/league-spartan/LeagueSpartan-Bold.otf"
import FontTT from "../fonts/Font files/otf-files/TT Tricks Regular.otf"

const fontFaces = `
  @font-face {
    font-family: "FontSpart" ;
    src: url(${FontSpart});
  }

  @font-face {
    font-family: "FontTT" ;
    src: url(${FontTT});
  }
`;

const HowItWorksSectionWrapper = styled.div`
  ${fontFaces}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  border-radius: 50px 0 0 50px;
  background-image: radial-gradient(circle closest-corner at 50% 50%, rgba(34, 33, 65, 0.24), rgba(0, 2, 18, 0) 10%);

  & h2 {
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.7rem;
    font-weight: 300;
    color: #c2c2c2;
  }

  & p {
    font-size: 1.1rem;
    margin-bottom: 4rem;
    max-width: 600px;
    line-height: 1.7rem;
    text-align: center;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #c2c2c2;
  }
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  color: #dfdfdf;
  gap: 0.5rem;
  line-height: 1.7rem;
  margin-top: 1.2rem;
  padding: 1.5rem 1rem;
  width: 18rem;
  height: 24rem;
  position: relative;
  border-radius: 10px;

  


  
  

  & h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: start;
    font-family: 'FontTT', sans-serif;
    font-weight: bold;
    background-image: linear-gradient(
                  135deg,
                  #4c60d1 100%,
                  #10ef74 0%
                
                );
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  & p {
    font-size: 1rem;
    margin-top: 2rem;
    text-align: start;
    line-height: 1.5rem;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #dfdfdf;
    letter-spacing: 0.01rem;
  }
`;


export function HowItWorksSection() {
  return (
    <HowItWorksSectionWrapper>
      <h2>How it Works</h2>
      <p>
        Our system is user-friendly and easy to use. Here's how it works
      </p>
      <StepsWrapper>
        <CardWrapper>
          <h3>Experiência do usuário</h3>
          <p>Dedicamos especial atenção à interface e à experiência do usuário, tornando nossos sistemas intuitivos, amigáveis e de fácil utilização. Isso resulta em maior produtividade e satisfação dos usuários finais.</p>
        </CardWrapper>
        <CardWrapper>
          <h3>Flexibilidade e personalização</h3>
          <p> Adaptamos as soluções de acordo com os requisitos específicos e garantimos a escalabilidade necessária para acompanhar o crescimento dos negócios. </p>
        </CardWrapper>
        <CardWrapper>
          <h3>Tecnologia de ponta</h3>
          <p>Estamos constantemente atualizados com as últimas tendências tecnológicas e utilizamos as ferramentas mais avançadas para desenvolver sistemas escaláveis e de alto desempenho</p>
        </CardWrapper>
        <CardWrapper>
          <h3>Suporte técnico especializado</h3>
          <p>Oferecemos suporte técnico contínuo aos nossos clientes, garantindo que seus sistemas estejam sempre atualizados, seguros e funcionando de maneira eficiente</p>
        </CardWrapper>
      </StepsWrapper>
    </HowItWorksSectionWrapper>

  );
}


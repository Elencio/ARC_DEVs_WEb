import styled from 'styled-components';

const HowItWorksSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  border-radius: 50px 0 0 50px;
  background-image: radial-gradient(circle closest-corner at 50% 50%, rgba(34, 33, 65, 0.24), rgba(0, 2, 18, 0) 10%);

  & h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2;
  }

  & p {
    font-size: 1.1rem;
    margin-bottom: 80px;
    max-width: 600px;
    line-height: 1.7rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2;
  }
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-gap: 3rem;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin-top: 30px;
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1.7rem;
  margin-top: 1.2rem;
  padding: 1rem 0.5rem;
  width: 300px;
  height: 350px;
  background-color: #1c1f26;
  border-radius: 10px;
  box-shadow:  0px 0px 0px 0.5px #c4c4c4;

  & h3 {
    font-size: 1.3rem;
    margin-top: 10px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #e8d4d4;
  }

  & p {
    font-size: 1rem;
    margin-top: 20px;
    text-align: center;
    line-height: 1.7rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2;
    letter-spacing: 0.01rem;
  }
`;

export function HowItWorksSection(){
  return (
    <HowItWorksSectionWrapper>
      <h2>How it Works</h2>
      <p>
        Our system is user-friendly and easy to use. Here's how it works:
      </p>
      <StepsWrapper>
        <StepCard>
      
          <h3>Experiência do usuário</h3>
          <p>Dedicamos especial atenção à interface e à experiência do usuário, tornando nossos sistemas intuitivos, amigáveis e de fácil utilização. Isso resulta em maior produtividade e satisfação dos usuários finais.</p>
        </StepCard>
        <StepCard>
       
          <h3>Flexibilidade e personalização</h3>
          <p> Adaptamos as soluções de acordo com os requisitos específicos e garantimos a escalabilidade necessária para acompanhar o crescimento dos negócios. 
</p>
        </StepCard>
        <StepCard>
 
          <h3>Tecnologia de ponta</h3>
          <p>Estamos constantemente atualizados com as últimas tendências tecnológicas e utilizamos as ferramentas mais avançadas para desenvolver sistemas escaláveis e de alto desempenho</p>
        </StepCard>
        <StepCard>

          <h3>Suporte técnico especializado</h3>
          <p>Oferecemos suporte técnico contínuo aos nossos clientes, garantindo que seus sistemas estejam sempre atualizados, seguros e funcionando de maneira eficiente</p>
        </StepCard>
      </StepsWrapper>
    </HowItWorksSectionWrapper>
  );
}


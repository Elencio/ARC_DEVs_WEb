import styled from 'styled-components';
import Imagem from "../assets/FOTO.png"
import FonTTT from "../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"
import { KeywordsWrapper } from './RobotSection';
import FonMonK from "../fonts/momcake-font/MomcakeThin-9Y6aZ.otf"
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: initial;
  background-image: radial-gradient(87% 50% at 50% -38%,rgba(255,255,255,.05) 77.5%,rgba(255,255,255,.016) 88.13%,rgba(255,255,255,0) 100%),radial-gradient(97% 109% at 48% 0,rgba(0,0,0,.07) 0,rgba(61, 76, 91, 0.4) 100%);
border-radius: 28px;
box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 1px inset;

  border-radius: 28px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 1px inset;
 
  @font-face {
    font-family: "FonMonK";
    src: url(${FonMonK});
  }


  @font-face {
    font-family: "FonTT";
    src: url(${FonTTT});
  }

`;

const Heading = styled.h2`
   font-size: 2.5rem;
    margin-top : 50px;
    font-family: 'Fontmonk', sans-serif;
    line-height: 1.7;
  font-weight: 300;
  color: #c4c4c4;
  line-height: 1.7rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  text-align: start;
  margin-bottom: 30px;
  color: #fff;
  font-family: "FonTT", sans-serif;
  line-height: 1.5rem;
  letter-spacing: 0.03rem;
`;

export const ContainerContent = styled.div `
padding: 6rem;
display: flex;
flex-direction: row;
align-items: center;
gap: 3rem;


.Image {
  width: 600px;
  border-radius: 10px;
  left: -24px;
  animation: slideImage 1s ease-in-out infinite alternate; /* Animation property */
}

@keyframes slideImage {
  from {
    transform: translateX(0px); /* Starting position */
  }
  to {
    transform: translateX(20px); /* Ending position */
  }
}
`


export function MissionVision(){
  return (
    <Wrapper>
      <Heading>Nossa missão e visão</Heading>
      <ContainerContent>
       <img src={Imagem} alt="" className='Image'/>
      <Text>
        <KeywordsWrapper>
        Nossa missão é fornecer <p>soluções de desenvolvimento</p> de sistemas <p>escaláveis e inovadoras</p> para empresas, impulsionadas pela mais recente tecnologia. Nosso objetivo é capacitar as empresas a alcançarem maior eficiência operacional, automação de processos e <p>melhor experiência para seus usuários finais</p>.
        Nossa visão é nos tornarmos <p>líderes reconhecidos</p> no mercado global de <p>desenvolvimento de sistemas</p>, estabelecendo parcerias duradouras com empresas de diversos setores. Queremos ser a escolha preferida das organizações que buscam soluções <p>personalizadas e eficientes</p> para suas necessidades tecnológicas.
        </KeywordsWrapper>
      </Text>
      </ContainerContent>
    </Wrapper>
  );
}


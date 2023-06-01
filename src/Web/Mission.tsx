import styled from 'styled-components';
import Imagem from "../assets/FOTO.svg"
import FonTTT from "../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"
import FonMonK from "../fonts/momcake-font/MomcakeThin-9Y6aZ.otf"
import Imagem2 from "../assets/imagem2.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "FonMonK", sans-serif;

  @font-face {
    font-family: "FonMonK";
    src: url(${FonMonK});
  }

  @font-face {
    font-family: "FonTT";
    src: url(${FonTTT});
  }
`;

const Text = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c4c4c4;
  font-family: "FonTTT", sans-serif;
  line-height: 1.8rem;
  letter-spacing: 0.06rem;
  border-radius: 10px;

  p {
    box-shadow: 0 0 0 0.1px;
  }

  p:nth-of-type(odd) {
    color: #4863f7;
    box-shadow-color: #4863f7;
    width: 400px;
    align-items: center;
  }

  p:nth-of-type(even) {
    color: #04d361;
    box-shadow-color: #04d361;
    width: 400px;
  }
`;

const ContainerContent = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 1rem;
  background-image: radial-gradient(87% 50% at left top,  #2a3858 0.5%, rgb(23, 25, 31) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 20%, rgb(23, 25, 31) 0, rgb(23, 25, 31) 100%);
`;

const Image = styled.img`
  width: 600px;
  border-radius: 10px;
  left: -24px;
`;

export function MissionVision() {
  return (
    <Wrapper>
      <ContainerContent>
        <Image src={Imagem} alt="" />
        <Text>
          A Startup tem como missão fornecer 
          <p>soluções escaláveis e inovadoras </p>
          de desenvolvimento de sistemas para empresas, visando melhorar a 
          <p>eficiência operacional</p> e experiência do usuário final. 
          A visão da empresa é se tornar líder no mercado global de 
          <p>desenvolvimento de sistemas </p>
          e ser a escolha preferida de organizações que buscam 
          <p>soluções eficientes e personalizadas.</p>
        </Text>
      </ContainerContent>
    </Wrapper>
  );
}
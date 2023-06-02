import styled from 'styled-components';
import Imagem from "../assets/FOTO.svg"
import FonTTT from "../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"
import FonMonK from "../fonts/momcake-font/MomcakeThin-9Y6aZ.otf"

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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c4c4c4;
  font-family: "FonTTT", sans-serif;
  line-height: 1.8rem;
  letter-spacing: 0.06rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 0 0 0.1px;

  &:nth-of-type(odd) {
    color: #4863f7;
    box-shadow-color: #4863f7;
    align-items: center;
  }

  &:nth-of-type(even) {
    color: #04d361;
    box-shadow-color: #04d361;
  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-image: radial-gradient(57% 80% at center top,  #2a3858 0.5%, rgb(23, 25, 31) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 20%, rgb(23, 25, 31) 0, rgb(23, 25, 31) 100%);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;

export function MissionVision() {
  return (
    <Wrapper>
      <ContainerContent>
        <Image src={Imagem} alt="" />
        <div>
          <Text>
            A Startup tem como missão fornecer soluções escaláveis e inovadoras de desenvolvimento de sistemas para empresas, visando melhorar a eficiência operacional e experiência do usuário final. 
          </Text>
          <Text>
            A visão da empresa é se tornar líder no mercado global de desenvolvimento de sistemas e ser a escolha preferida de organizações que buscam soluções eficientes e personalizadas.
          </Text>
        </div>
      </ContainerContent>
    </Wrapper>
  );
}
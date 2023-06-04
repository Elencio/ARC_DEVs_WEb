import styled from 'styled-components';
import Imagem from "../assets/FOTO.svg"
import FonTTT from "../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"
import FonMonK from "../fonts/momcake-font/MomcakeThin-9Y6aZ.otf"

const Wrapper = styled.div`
  display: flex;
  margin: 0;

  font-family: "FonMonK", sans-serif;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100px;
      top: 0px;
      filter: blur(80px);
      background: radial-gradient(3.51deg, #5c3382 2.84%, #000 99.18%);
    }
  
 

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 1rem;
  }

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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.06rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 0 0 0.3px;

  

  &:nth-of-type(odd) {
    color: #4863f7;
    box-shadow-color: #6f82ee;
    align-items: center;
  }

  &:nth-of-type(even) {
    color: #04d361;
    box-shadow-color: #04d361;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  z-index: 1;
`;

export function MissionVision() {
  return (
    <Wrapper>
        <Image src={Imagem} alt="" />
        <div>
          <Text>
            A Startup tem como missão fornecer soluções escaláveis e inovadoras de desenvolvimento de sistemas para empresas, visando melhorar a eficiência operacional e experiência do usuário final. 
          </Text>
          <Text>
            A visão da empresa é se tornar líder no mercado global de desenvolvimento de sistemas e ser a escolha preferida de organizações que buscam soluções eficientes e personalizadas.
          </Text>
        </div>
    </Wrapper>
  );
}
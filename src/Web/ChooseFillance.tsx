import styled from 'styled-components';
import FontSpart from "../fonts/league-spartan/LeagueSpartan-Bold.otf"
import FonMonK from "../fonts/momcake-font/MomcakeThin-9Y6aZ.otf"
import Imageone from "../assets/imagem1.svg"
import Cube from "../assets/cube.svg"
import Triangulo from "../assets/triangulo.svg"
import FonTTT from "../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"


const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  padding: 8rem;
  font-family: "FonTTT", sans-serif;
  letter-spacing: 1.25%;
  line-height: 1.7;

  @font-face {
    font-family: "FonTTT";
    src: url(${FonTTT}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: "FontSpart";
    src: url(${FontSpart}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: "Fontmonk";
    src: url(${FonMonK}) format('opentype');
    font-display: swap;
  }
`;

const ContainerHeader = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
  background-color:  #17191f;
  color: #c4c4c4;
  padding: 0 3rem;
  height: 380px;
  font-size: 1.1rem;
  border-radius: 10px;
  position: relative;
  background-image: radial-gradient(87% 50% at 50% -38%,  #233d48 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 20%, rgba(0, 0, 0, .07) 0, rgba(22, 21, 21, 0.4) 100%);

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-image: linear-gradient(to right, #4863f7 30%, #221b49 50%);
    border-radius: inherit;
  }
`;

const Text = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  background-color:  #17191f;
  color: #c4c4c4;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.1rem;
  background-image: radial-gradient(87% 50% at 50% -38%,  #233d48 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 20%, rgba(0, 0, 0, .07) 0, rgba(22, 21, 21, 0.4) 100%);

  font-family: "FonTTT", sans-serif;

  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-image: linear-gradient(to right, #4863f7 20%, #221b49 50%);
    border-radius: inherit;
  }
`;

const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Text1 = styled(Text)`
  height: 300px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
 
  text-align: center;
`;

const Image1 = styled(Image)`
  position: static;
`;

const Image2 = styled(Image)`
  position: static;
  color: #c4c4c4;
`;


export function SectionWhyChooose() {
  return (
    <Container>
      <ContainerHeader>
        <span>
          Para criar um grid com um card maior e dois cards menores, podemos usar a propriedade grid-template-columns com a função repeat para definir quantas colunas queremos no grid. Além disso, podemos ajustar o tamanho das colunas para que o card do meio seja maior do que os outros dois.
        </span>

        <Image src={Imageone} alt="" />
      </ContainerHeader>

      <ContainerContent>
        <Text1>
          <p>Primeiramente, precisamos definir a estrutura de componentes. Vamos precisar de três components: um componente para o Grid principal</p>
          <Image1 src={Cube} alt="" />
        </Text1>
        <Text>
          <p>Para criar um grid com um card maior e dois cards menores, podemos usar a propriedade grid-template-columns com a função repeat para definir quantas colunas queremos no grid.</p>

          <Image2 src={Triangulo} alt="" />
        </Text>
      </ContainerContent>
    </Container>
  );
}
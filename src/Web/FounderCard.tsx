import styled from 'styled-components';
import FontTT from "../fonts/Font files/otf-files/TT Tricks Regular.otf"

const CardContainer = styled.div`
margin-top: 3rem;
margin-bottom: 3rem;
padding-bottom: 3rem;
gap: 0.3rem;
border-bottom: 1px solid #4863f7;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px;
`;

const FounderImage = styled.img`
width: 180px;
height: 180px;
border-radius: 50%;
`;

const FounderName = styled.h2`
margin-top: 10px;
font-size: 1rem;
font-weight: 300;
color: #c2c2c2;
`;

const FounderPosition = styled.h3`
font-size: 1.2rem;
margin-top: 5px;
color: #777;
font-weight: 300;
color: #c2c2c2;
`;

const FounderDescription = styled.p`
font-size: 1rem;
line-height: 1.5;
text-align: center;
margin-top: 10px;
color: #a8b3cf;
font-weight: 300;
`;

const Card = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1.9rem;
justify-content: center;
`;

const Container = styled.div`
padding: 8rem 2rem;
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
justify-content: center;
text-align: center;
background-image: radial-gradient(87% 40% at 50% 130%, #221b49 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(107% 109% at 48% 20%, rgba(0, 0, 0, 0.07) 0, rgba(25, 28, 26, 0.4) 100%);
z-index: -1;
color: #f5e4e4;

h1 {
  font-size: 1.6rem;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
}
`;

export function FounderCard() {
  return (
    <Container>
      <h1>Meet Our Team</h1>
    <Card>

      <CardContainer>
        <FounderImage src="https://media.licdn.com/dms/image/D4D03AQFNDBZmh3OM5g/profile-displayphoto-shrink_200_200/0/1683651610619?e=1691020800&v=beta&t=PdGHUdEKauP6NR0pjhyFTraDkiLr8EI2dIhc8FkTO68" alt="" />
        <FounderName>Antonio Uamba</FounderName>
        <FounderPosition>Engenheiro de Dados</FounderPosition>
        <FounderDescription>Estudante de Engenharia da Computação</FounderDescription>
      </CardContainer>

      <CardContainer>
        <FounderImage src="https://media.licdn.com/dms/image/D4D03AQHgEhv-rlyA1w/profile-displayphoto-shrink_200_200/0/1668127848711?e=1691020800&v=beta&t=3XNjFz4HX53TTzgKHYACdWj-LW6CTyhvVTFZb7Tv6kc" alt="" />
        <FounderName>Edilson Cuambe</FounderName>
        <FounderPosition>Desenvolvedor Backend</FounderPosition>
        <FounderDescription>Estudante de Engenharia da Computação</FounderDescription>
      </CardContainer>

      <CardContainer>
        <FounderImage src="https://media.licdn.com/dms/image/D4D03AQH0cx69Lz0XGA/profile-displayphoto-shrink_200_200/0/1683208530627?e=1691020800&v=beta&t=teDcSXTmdIOL8n4IfH0DDcRT2kLWOrWS6w4H2Y2QeLU" alt="" />
        <FounderName>Elencio Zivane</FounderName>
        <FounderPosition>Frontend Developer UI/UX</FounderPosition>
        <FounderDescription>Estudante de Engenharia da Computação</FounderDescription>
      </CardContainer>

      <CardContainer>
        <FounderImage src="https://media.licdn.com/dms/image/C4D03AQFWznBu37D1rA/profile-displayphoto-shrink_200_200/0/1640373473179?e=1691020800&v=beta&t=geRJhJn2dvvPjPgtogx5QjZJqy0mY2RNYCXb1nti6fA" alt="" />
        <FounderName>Gervasio Dombo</FounderName>
        <FounderPosition>Fullstack Developer</FounderPosition>
        <FounderDescription>Estudante de Engenharia de Software</FounderDescription>
      </CardContainer>
    </Card>
    </Container>
  );
}


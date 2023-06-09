import styled from 'styled-components';
import { GithubIcon, TwitterIcon } from '@mantine/ds';
import { LinkedinLogo } from 'phosphor-react';



const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 2rem 2rem;

  a {
    color: #fff;
   
    box-shadow: 0 0 0 0.2px #8b8787;
    padding: 0.7rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    text-decoration: none;
  }

  a:hover {
    color: #121212;
    background-color: #dfdfdf;
  }
`;

const Link = styled.a`
  margin-right: 1rem;
`;





const CardContainer = styled.div`
margin-top: 3rem;
margin-bottom: 3rem;
padding-bottom: 3rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 280px;
gap: 0.2rem;
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
font-size: 1.125rem;
font-weight: 400;
color: #dfdfdf;
line-height: 1.75rem;
font-family: 'Hanken Grotesk', sans-serif;
`;

const FounderPosition = styled.h3`
font-size: 1.125rem;
margin-top: 5px;
font-weight: 500;
color: #dfdfdf;
line-height: 1.75rem;
font-family: 'Hanken Grotesk', sans-serif;
`;



const Card = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0.5rem;
gap: 1.9rem;
justify-content: center;
`;

const Container = styled.div`
padding: 5rem 0rem;
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
justify-content: center;
text-align: center;

color: #dfdfdf;

h1 {
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;

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
          <FounderPosition>Date Engineer</FounderPosition>
          <Wrapper>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={26}/>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={22}/>
            </Link>
          </Wrapper>
        </CardContainer>

        <CardContainer>
          <FounderImage src="https://media.licdn.com/dms/image/D4D03AQHgEhv-rlyA1w/profile-displayphoto-shrink_200_200/0/1668127848711?e=1691020800&v=beta&t=3XNjFz4HX53TTzgKHYACdWj-LW6CTyhvVTFZb7Tv6kc" alt="" />
          <FounderName>Edilson Cuambe</FounderName>
          <FounderPosition>Desenvolvedor Backend</FounderPosition>

          <Wrapper>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={26}/>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={22}/>
            </Link>
          </Wrapper>
        </CardContainer>

        <CardContainer>
          <FounderImage src="https://media.licdn.com/dms/image/D4D03AQH0cx69Lz0XGA/profile-displayphoto-shrink_200_200/0/1683208530627?e=1691020800&v=beta&t=teDcSXTmdIOL8n4IfH0DDcRT2kLWOrWS6w4H2Y2QeLU" alt="" />
          <FounderName>Elencio Zivane</FounderName>
          <FounderPosition>Frontend Developer UI/UX</FounderPosition>

          <Wrapper>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={24}/>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={22}/>
            </Link>
          </Wrapper>
        </CardContainer>

        <CardContainer>
          <FounderImage src="https://media.licdn.com/dms/image/C4D03AQFWznBu37D1rA/profile-displayphoto-shrink_200_200/0/1640373473179?e=1691020800&v=beta&t=geRJhJn2dvvPjPgtogx5QjZJqy0mY2RNYCXb1nti6fA" alt="" />
          <FounderName>Gervasio Dombo</FounderName>
          <FounderPosition>Fullstack Developer</FounderPosition>

          <Wrapper>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={26}/>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={22}/>
            </Link>
          </Wrapper>
        </CardContainer>
      </Card>
    </Container>
  );
}


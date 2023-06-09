import styled from 'styled-components';
import { FaShareAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BsArrowRightSquare, BsFillBookmarkFill } from "react-icons/bs"
import Image1 from "../assets/pexels-nataliya-vaitkevich-4450115.jpg"
import Image2 from "../assets/pexels-pixabay-316093.jpg"
import Image3 from "../assets/pexels-pavel-danilyuk-8438944.jpg"
import Image4 from "../assets/pexels-daniel-putzer-633409.jpg"

import { NavLink } from 'react-router-dom';

const Container = styled.div`
padding: 1rem;
  margin-top: 3rem;
  background-color: transparent;
  overflow: hidden;
  width: 380px;
  background-color: #1c1f26;
  box-shadow: 0 0 0 0.3px #383d47;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  position: relative;

  span {
    position: absolute;
    top: 10px;
    font-size: 1rem;
    left: 220px;
    border-radius: 10px;
 
    line-height: 1.5rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: 1.25%;
    color: #dfdfdf ;
    padding: 0.2rem;
    background: linear-gradient(45deg, #ffc107, #ff9800);
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  max-height: 100%;
  border-radius: 10px;
`;



const Title = styled.h2`
  margin: 0;
  padding: 16px;
  font-size: 1.25rem;
  color: #4863f7;
  line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    transform: translateY(-100%);
  animation: slideDown 1.7s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;



  @keyframes slideDown {
  to {
    transform: translateY(0);
  }
}
`;

const Description = styled.p`
  margin: 0;
  padding: 16px;
  color: #dfdfdf;
  line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.7;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: #dfdfdf;
  line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;


  & > div {
    display: flex;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const ProfileName = styled.span`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-family: 'Hanken Grotesk', sans-serif;
 ;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

`

export const Carde = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 2rem;

  h1{
    color: #dfdfdf;
    line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
  }
`
const SeeBlogWrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
`;

const SeeBlogText = styled.strong`
  font-size: 1.125rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    line-height: 1.75rem;
    color: #dfdfdf;
`;

const ArrowIcon = styled(BsArrowRightSquare)`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  color: #dfdfdf;
`;

export function Card() {
  return (
    <Carde>
      <h1>Our Blog</h1>
      <ContainerCards>
        <Container>
          <ImageContainer>
            <Image src={Image1} alt="Outstanding" />
            <span>Outstanding</span>
          </ImageContainer>
          <Title>Titulo da publicação</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam!
          </Description>
          <Footer>
            <div>
              <ProfileImage src={Image2} alt="Profile Picture" />
              <ProfileName>John Doe</ProfileName>
            </div>
            <div>
              <FaShareAlt style={{ marginRight: '16px' }} />
              <MdOutlineFavoriteBorder style={{ marginRight: '16px' }} />
              <BsFillBookmarkFill />
            </div>
          </Footer>
        </Container>

        <Container>
          <ImageContainer>
            <Image src={Image3} alt="Outstanding" />
          </ImageContainer>
          <Title>Titulo da publicação</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam!
          </Description>
          <Footer>
            <div>
              <ProfileImage src={Image4} alt="Profile Picture" />
              <ProfileName>John Doe</ProfileName>
            </div>
            <div>
              <FaShareAlt style={{ marginRight: '16px', Color: "#1c1f26" }} />
              <MdOutlineFavoriteBorder style={{ marginRight: '16px', Color: "#1c1f26" }} />
              <BsFillBookmarkFill />
            </div>
          </Footer>
        </Container>

        <Container>
          <ImageContainer>
            <Image src={Image4} alt="Outstanding" />
          </ImageContainer>
          <Title>Titulo da publicação</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam!
          </Description>
          <Footer>
            <div>
              <ProfileImage src={Image2} alt="Profile Picture" />
              <ProfileName>John Doe</ProfileName>
            </div>
            <div>
              <FaShareAlt style={{ marginRight: '16px' }} />
              <MdOutlineFavoriteBorder style={{ marginRight: '16px' }} />
              <BsFillBookmarkFill />
            </div>
          </Footer>
        </Container>
      </ContainerCards>
     
      <SeeBlogWrapper>
        <NavLink to="/blog">
           <SeeBlogText>Ver mais</SeeBlogText>
        </NavLink>
     
      <ArrowIcon />
    </SeeBlogWrapper>

    </Carde>
  );
}


import styled from 'styled-components';
import { useState } from 'react';
import logo from "../../assets/default-monochrome.svg"
import { FaChevronLeft} from 'react-icons/fa';
import Hero from "../../assets/pexels-pavel-danilyuk-8438944.jpg"
import FontTT from "../../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { FaShareAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BsFillBookmarkFill } from "react-icons/bs"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dfdfdf;
  position: fixed;

  @font-face {
    font-family: "FontTT" ;
    src: url(${FontTT});
  }

`;

const Logo = styled.img`
  width: 140px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: #dfdfdf;
  font-size: 1.2rem;
  margin-right: 1.5rem;
  text-decoration: none;
  font-family: "FontTT", sans-serif;

`;

const HeroSection = styled.section`
  background: url(${Hero}) no-repeat center center;
  background-size: cover;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0 0 0 0.8px #dfdfdf;
`;

const Heading = styled.h1`
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ffc107, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;


const cardsData = [
  {
    title: 'Post One Title',
    author: 'Author One',
    theme: 'Theme One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Two Title',
    author: 'Author Two',
    theme: 'Theme Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Three Title',
    author: 'Author Three',
    theme: 'Theme Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Four Title',
    author: 'Author Four',
    theme: 'Theme Four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`
  },
  {
    title: 'Post Five Title',
    author: 'Author Five',
    theme: 'Theme Five',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Six Title',
    author: 'Author Six',
    theme: 'Theme Six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
];

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 5rem;
`;

const Card = styled.article`
  background-color: #1c1f26;
  box-shadow: 0 0 0 0.3px #383d47;
  padding: 1rem;
  border-radius: 10px;
`;

const CardImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4863f7;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CardAuthor = styled.span`
  color: #666;
  font-size: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CardTheme = styled.span`
 background-color: #7e1772;
  border-radius: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardButton = styled.a`
  box-shadow: 0 0 0 0.8px #04d361;
  border-radius: 0.5rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
  display: inline-block;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #04d361;
    color: #121212;
    font-weight: bold;
  }

  &:active {
    background-color: #444;
  }
`;





const cardsDataIn = [
  {
    title: 'Post One Title',
    author: 'Author One',
    theme: 'Theme One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Two Title',
    author: 'Author Two',
    theme: 'Theme Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Three Title',
    author: 'Author Three',
    theme: 'ha 2 horas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Four Title',
    author: 'Author Four',
    theme: 'Theme Four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Five Title',
    author: 'Author Five',
    theme: 'Theme Five',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
  {
    title: 'Post Six Title',
    author: 'Author Six',
    theme: 'Theme Six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `${Hero}`,
  },
];

const CarouselCardWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 2rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselCard = styled.article`
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
  background-color: #1c1f26;
  box-shadow: 0 0 0 0.3px #383d47;
  flex: 0 0 calc(90vw / 3 - 2rem);
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

const CarouselCardImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const CarouselCardContent = styled.div`
  padding: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CarouselCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4863f7;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CarouselCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CarouselCardAuthor = styled.span`
  color: #666;
  font-size: 1rem;
`;

const CarouselCardTheme = styled.span`
  background-color: #7e1772;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CarouselCardDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CarouselCardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const CarouselCardButton = styled.a`
  background-color: transparent;
  border-radius: 0.5rem;
  display: inline-block;
  font-size: 1rem;
  color: #dfdfdf;
  padding: 0.5rem 1rem;
  text-decoration: none;
  box-shadow: 0 0 0 0.8px #04d361;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
  transition: background-color 0.2s;

  &:hover {
    background-color:  #04d361;
    color: #121212;
    font-weight: bold;
  }

  &:active {
    background-color: #444;
  }
`;

const ChevronButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  padding: 0 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;


const FooterWrapper = styled.footer`
  background-color: #333;
  padding: 2rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterLogo = styled.img`
 width: 140px;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin-right: 2rem;
  text-decoration: none;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;

  &:hover {
    color: #ccc;
  }
`;

const FooterLegal = styled.div`
  font-size: 1rem;
`;



const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Tag = styled.div`
  background-color: transparent;
  box-shadow: 0 0 0 0.8px rgb(72, 99, 247);
  color: #dfdfdf;
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;

  &:hover {
    background-color: #4863f7;
    color: #121212;
    font-weight: bold;
  }
`;
export const Manipulation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`

const options = ["Web Design", "Data Science", "Frameworks", "Artificial Intelligence"];





const Arrow = styled.div`
  color: #dfdfdf;
  font-size: 2rem;
  cursor: pointer;

 
`;



export function HeaderHero() {

  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (event: { target: any; }) => {
    const element = event.target;
    const offset = element.scrollLeft;
    setScrollOffset(offset);
  };

  const handleScrollEnd = (event: any, direction: string) => {
    const element = event.target;
    const offset = element.scrollLeft;
    const itemWidth = element.querySelector('article').offsetWidth;
    const snapOffset = Math.round(offset / itemWidth) * itemWidth;
    const nextOffset = direction === 'right' ? snapOffset + itemWidth : snapOffset - itemWidth;
    element.scrollTo({
      top: 0,
      left: nextOffset, behavior: 'smooth',
    }); setScrollOffset(nextOffset);
  };





  return (
    <>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Nav>
      </Header>
      <HeroSection>
        <Heading>Welcome to our website</Heading>
        <Subheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subheading>
      </HeroSection>
      <BlockWrapper>
        {options.map((option) => (
          <Tag
            key={option}
          >
            {option}
          </Tag>
        ))}
      </BlockWrapper>
      <CardWrapper>
        {cardsDataIn.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardMeta>
                <CardAuthor>{card.author}</CardAuthor>
                <CardTheme>{card.theme}</CardTheme>
              </CardMeta>
              <CardDescription>{card.description}</CardDescription>
              <CardActions>
                <CardButton href="#">Read More</CardButton>
                <div>
                  <FaShareAlt style={{ marginRight: '16px', Color: "#1c1f26" }} />
                  <MdOutlineFavoriteBorder style={{ marginRight: '16px', Color: "#1c1f26" }} />
                  <BsFillBookmarkFill />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </CardWrapper>

      <CarouselCardWrapper onScroll={handleScroll}>

        {
          cardsData.map((card, index) => (<CarouselCard key={index}> <CarouselCardImage src={card.image} alt={card.title} /> <CarouselCardContent>
            <CarouselCardTitle>{card.title}</CarouselCardTitle>
            <CarouselCardMeta>
              <CarouselCardAuthor>{card.author}</CarouselCardAuthor> <CarouselCardTheme>{card.theme}

              </CarouselCardTheme>

            </CarouselCardMeta>
            <CarouselCardDescription>{card.description}</CarouselCardDescription> <CarouselCardActions>
              <CarouselCardButton href="#">Read More</CarouselCardButton>
              <div>
                <FaShareAlt style={{ marginRight: '16px', Color: "#1c1f26" }} />
                <MdOutlineFavoriteBorder style={{ marginRight: '16px', Color: "#1c1f26" }} />
                <BsFillBookmarkFill />
              </div>
            </CarouselCardActions>
          </CarouselCardContent>
          </CarouselCard>))}
      </CarouselCardWrapper>
      {scrollOffset > 0 && (<ChevronButton onClick={event => handleScrollEnd(event, 'left')}>
        <FaChevronLeft />
      </ChevronButton>)}
      {scrollOffset < CarouselCardWrapper.scrollWidth - CarouselCardWrapper.offsetWidth && (<ChevronButton onClick={event => handleScrollEnd(event, 'right')}>
      </ChevronButton>)}

      <Manipulation>
        <Arrow>
          <BsArrowLeftSquare size={30} />
        </Arrow>
        <Arrow>
          <BsArrowRightSquare size={30} />
        </Arrow>
      </Manipulation>

      <FooterWrapper>
        <FooterContainer>
          <FooterLogo src={logo} alt="Footer Logo" />
          <FooterNav>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterNav>
          <FooterLegal>
            <p>&copy; 2022 Blog Name. All rights reserved.</p>
            <p>
              Designed and developed by <a href="#">Your Name</a>.
            </p>
          </FooterLegal>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
}


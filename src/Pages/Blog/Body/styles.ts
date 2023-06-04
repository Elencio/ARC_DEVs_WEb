import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 5rem;
`;

export const Card = styled.article`
  background-color: #1c1f26;
  box-shadow: 0 0 0 0.3px #383d47;
  padding: 1rem;
  border-radius: 10px;
`;

export const CardImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

export const CardContent = styled.div`
  padding: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4863f7;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CardAuthor = styled.span`
  color: #666;
  font-size: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CardTheme = styled.span`
 background-color: #7e1772;
  border-radius: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
`;

export const CardDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButton = styled.a`
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

export const CarouselCardWrapper = styled.div`
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

export const CarouselCard = styled.article`
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

export const CarouselCardImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

export const CarouselCardContent = styled.div`
  padding: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CarouselCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4863f7;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CarouselCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CarouselCardAuthor = styled.span`
  color: #666;
  font-size: 1rem;
`;

export const CarouselCardTheme = styled.span`
  background-color: #7e1772;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CarouselCardDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CarouselCardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;

export const CarouselCardButton = styled.a`
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

export const ChevronButton = styled.button`
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

export const Manipulation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`

export const Arrow = styled.div`
  color: #dfdfdf;
  font-size: 2rem;
  cursor: pointer;

 
`;


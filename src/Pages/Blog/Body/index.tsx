import { useState } from "react";
import { FaChevronLeft} from 'react-icons/fa';
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { FaShareAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BsFillBookmarkFill } from "react-icons/bs"
import { cardsData, cardsDataIn} from "../data"
import { Arrow, Card, CardActions, CardAuthor, CardButton, CardContent, CardDescription, CardImage, CardMeta, CardTheme, CardTitle, CardWrapper, CarouselCard, CarouselCardActions, CarouselCardAuthor, CarouselCardButton, CarouselCardContent, CarouselCardDescription, CarouselCardImage, CarouselCardMeta, CarouselCardTheme, CarouselCardTitle, CarouselCardWrapper, ChevronButton, Manipulation} from "./styles"


export function Body() {
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

  return(
    <>
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
    {
      scrollOffset > 0 && (<ChevronButton onClick={event => handleScrollEnd(event, 'left')}>
        <FaChevronLeft />
      </ChevronButton>)
    }
    {
      scrollOffset < CarouselCardWrapper.scrollWidth - CarouselCardWrapper.offsetWidth && (<ChevronButton onClick={event => handleScrollEnd(event, 'right')}>
      </ChevronButton>)
    }
  
    <Manipulation>
      <Arrow>
        <BsArrowLeftSquare size={30} />
      </Arrow>
      <Arrow>
        <BsArrowRightSquare size={30} />
      </Arrow>
    </Manipulation>
    </>
  )
  
}
/* import { useState, useCallback } from "react";
import { FaChevronLeft } from 'react-icons/fa';
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs"; */
import { FaShareAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BsFillBookmarkFill } from "react-icons/bs"
import { /* cardsData, */ cardsDataIn } from "../data"
import * as styled from "./styles"

export function Body() {

  /* const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = useCallback((event: { target: any; }) => {
    const element = event.target;
    const offset = element.scrollLeft;
    setScrollOffset(offset);
  }, [setScrollOffset]);

  const handleScrollEnd = useCallback((event: any, direction: string) => {
    const element = event.target;
    const offset = element.scrollLeft;
    const itemWidth = element.querySelector('article').offsetWidth;
    const snapOffset = Math.round(offset / itemWidth) * itemWidth;
    const nextOffset = direction === 'right' ? snapOffset + itemWidth : snapOffset - itemWidth;
    element.scrollTo({
      top: 0,
      left: nextOffset, behavior: 'smooth',
    }); setScrollOffset(nextOffset);
  }, []);
 */


  return (
    <>
      <styled.CardWrapper>
        {cardsDataIn.map((card, index) => (
          <styled.Card key={index}>
            <styled.CardImage src={card.image} alt={card.title} />
            <styled.CardContent>
              <styled.CardTitle>{card.title}</styled.CardTitle>
              <styled.CardMeta>
                <styled.CardAuthor>{card.author}</styled.CardAuthor>
                <styled.CardTheme>{card.theme}</styled.CardTheme>
              </styled.CardMeta>
              <styled.CardDescription>{card.description}</styled.CardDescription>
              <styled.CardActions>
                <styled.CardButton href="#">Read More</styled.CardButton>
                <div>
                  <FaShareAlt className="icon" />
                  <MdOutlineFavoriteBorder className="icon" />
                  <BsFillBookmarkFill className="icon" />
                </div>
              </styled.CardActions>
            </styled.CardContent>
          </styled.Card>
        ))}
      </styled.CardWrapper>

      {/* <styled.CarouselCardWrapper onScroll={handleScroll}>
        {cardsData.map((card, index) => (
          <styled.CarouselCard key={index}>
            <styled.CarouselCardImage src={card.image} alt={card.title} />
            <styled.CarouselCardContent>
              <styled.CarouselCardTitle>{card.title}</styled.CarouselCardTitle>
              <styled.CarouselCardMeta>
                <styled.CarouselCardAuthor          >{card.author}</styled.CarouselCardAuthor>
                <styled.CarouselCardTheme>{card.theme}</styled.CarouselCardTheme>
              </styled.CarouselCardMeta>
              <styled.CarouselCardDescription>{card.description}</styled.CarouselCardDescription>
              <styled.CarouselCardActions>
                <styled.CarouselCardButton href="#">Read More</styled.CarouselCardButton>
                <div>
                  <FaShareAlt className="icon" />
                  <MdOutlineFavoriteBorder className="icon" />
                  <BsFillBookmarkFill className="icon" />
                </div>
              </styled.CarouselCardActions>
            </styled.CarouselCardContent>
          </styled.CarouselCard>
        ))}
      </styled.CarouselCardWrapper>
      {scrollOffset > 0 && (
        <styled.ChevronButton onClick={(event) => handleScrollEnd(event, 'left')}>
          <FaChevronLeft />
        </styled.ChevronButton>
      )}
      {scrollOffset < styled.CarouselCardWrapper.scrollWidth - styled.CarouselCardWrapper.offsetWidth && (
        <styled.ChevronButton onClick={(event) => handleScrollEnd(event, 'right')}>
          <BsArrowRightSquare />
        </styled.ChevronButton>
      )}
      <styled.Manipulation>
        <styled.Arrow>
          <BsArrowLeftSquare size={30} />
        </styled.Arrow>
        <styled.Arrow>
          <BsArrowRightSquare size={30} />
        </styled.Arrow>
      </styled.Manipulation> */}
    </>
  )
}
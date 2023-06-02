import styled from 'styled-components';
import FontTT from "../fonts/Font files/otf-files/TT Tricks Regular.otf"
import FontSpart from "../fonts/league-spartan/LeagueSpartan-Bold.otf"
import FonMonK from "../fonts/momcake-font/MomcakeThin-9Y6aZ.otf"
import { Indicator } from '@mantine/core';
import Points from "../assets/ImagePoints.svg"

const OurFeaturesSectionWrapper = styled.div`
  @font-face {
    font-family: "FontSpart";
    src: url(${FontSpart});
  }

  @font-face {
    font-family: "Fontmonk";
    src: url(${FonMonK});
  }

  @font-face {
    font-family: "FontTT";
    src: url(${FontTT});
  }

    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: center;
    gap: 50px;
   
  align-items: center;
  padding: 100px 10vw;
  background-image: radial-gradient(187% 50% at 50% -38%,  #2b1268 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 20%, rgba(0, 0, 0, .07) 0,#120532 100%);







    h4 {
      margin-bottom: 0;
      font-weight: bold;
      font-size: clamp(1.5rem, 5vw, 2rem);
    }

  

`;

export const Featurecard = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 20px;
    box-shadow: 0 0 0 0.4px #562ac7;
    border-radius: 10px;
    min-width: 180px;
    max-width: 550px;
    transition: all 0.2s ease-in-out;
    z-index: 1;

    h4 {
    font-size: 1.1rem;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #dfdfdf;
    line-height: 1.7;
    letter-spacing: 1.25%;
  }

  p {
 
    font-size: 1.1rem;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #dfdfdf;
    line-height: 1.7;
    letter-spacing: 1.25%;

  }

`

export const Featureicon = styled.div`
    display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      width: clamp(60px, 15vw, 100px);
      height: clamp(60px, 15vw, 100px);
      background-color: #f4f4f4;
      border-radius: 50%;

      svg {
        width: clamp(32px, 8vw, 50px);
        height: clamp(32px, 8vw, 50px);
      }
`

export const Featuregrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;



    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
`

export const Leftalignedsection = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 0.6rem;

   h1 {
    font-size: 1.8rem;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #dfdfdf;
    line-height: 1.7;
    letter-spacing: 1.25%;
   }

   h2 {
    font-size: 1.1rem;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #dfdfdf;
    line-height: 1.7;
    letter-spacing: 1.25%;
  }

  button {
    padding: 10px 20px;
    font-size: 1.1rem;
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 0 0.3px #0e93f3;
    transition: background-color 0.2s ease-in-out;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7rem;
    margin-bottom: 80px;
    font-family: 'FontTT', sans-serif;
    font-weight: 300;
    color: #dfdfdf;
    line-height: 1.7;
    letter-spacing: 1.25%;
  }
`

export const ContainerGrid = styled.div`
  display: flex;
  padding: 1.5rem 6rem;
  border-radius: 10px;
  background-color:  #111033;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 0 0 0.2px #dfdfdf;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background-image: linear-gradient(to top, #4863f7 30%, #562ac7 70%);
    border-radius: inherit;
  }


  .points {
    position: absolute;
    left: 1px;
    top: 5px;
    width: 464px;
    opacity: .03;
  }
  

`

export function OurFeaturesSection() {
  return (
    <OurFeaturesSectionWrapper>

      <Leftalignedsection>
        <h1>Features with title</h1>
        <h2>Left-aligned title explaining these awesome features</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <button>Primary button</button>
      </Leftalignedsection>

      <ContainerGrid>
           <img src={Points} alt="" className='points' />
          <Featurecard>
            <Featureicon>
              <Indicator children={undefined} />
            </Featureicon>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </Featurecard>
    

          <Featurecard>
            <Featureicon>
              <Indicator children={undefined} />
            </Featureicon>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </Featurecard>
  
      </ContainerGrid>
    </OurFeaturesSectionWrapper>

  )
}
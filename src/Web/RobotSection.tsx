import styled from 'styled-components';
import Image from "../assets/image.svg";
import Imagegreen from "../assets/imagegreen.svg";
import FontSpart from "../fonts/league-spartan/LeagueSpartan-Bold.otf"
import FonMon from "../fonts/momcake-font/MomcakeBold-WyonA.otf"
import FontTT from "../fonts/Font files/otf-files/TT Tricks Regular.otf"

const RobotSectionWrapper = styled.div`
  
  @font-face {
    font-family: "FontSpart" ;
    src: url(${FontSpart});
  }

  @font-face {
    font-family: "FontTT" ;
    src: url(${FontTT});
  }
    
  @font-face {
    font-family: "FontMon" ;
    src: url(${FonMon});
  }




  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0;
  border-radius: 50px 0 0 50px;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: opacity 1.2s cubic-bezier(.25,.46,.45,.94),transform 1.2s cubic-bezier(.25,.46,.45,.94);
  will-change: opacity,transform;

  & h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 500;
    line-height: 1.7;
    color: #ffffff;
    text-align: center;


  }

  & p {
    font-size: 1.125rem;
    margin-bottom: 80px;
    font-family: 'Hanken Grotesk', sans-serif;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 1.25%;
    color: #F8FAFC;
    text-align: center;
  }

  .Image {
  position: absolute;
  width: 120px;
  left: 620px;
  bottom: 0px;
  animation: move-up 2s ease-in-out infinite alternate;
}

.Image1 {
  position: absolute;
  width: 120px;
  left: 1000px;
  animation: move-up 2s 3s ease-in-out infinite alternate;
}

.Image2 {
  position: absolute;
  width: 120px;
  left: 100px;
  animation: move-up 2s 1s ease-in-out infinite alternate;
}

.Image3 {
  position: absolute;
  width: 120px;
  left: 1170px;
  bottom: 10px;
  animation: move-up 2s 1.5s ease-in-out infinite alternate;
}

.Image4 {
  position: absolute;
  width: 120px;
  left: 870px;
  animation: move-up 2s 2s ease-in-out infinite alternate;
}

.Image5 {
  position: absolute;
  width: 120px;
  left: 240px;
  bottom: 50px;
  animation: move-up 2s 2.5s ease-in-out infinite alternate;
}

@keyframes move-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(300px);
  }
}
`;


export const KeywordsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin-top: 30px;

  & p {
    margin: 25px 27px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    background-color: rgb(18, 18, 20);
    padding: 1rem;
    line-height: 1.5rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    position: relative;

    &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -1.2px;
    left: -1.2px;
    right: -1.2px;
    bottom: -1px;
    background-image: linear-gradient(to right, #cb2d3e 20%, #ef473a 50%);
    border-radius: inherit;
  }
 
  }

 

`;

export function RobotSection(){
  return (
    <RobotSectionWrapper>
       <img src={Image} alt="" className='Image'/>
       <img src={Image} alt="" className='Image1'/>
       <img src={Image} alt="" className='Image2'/>
       <img src={Imagegreen} alt="" className='Image3'/>
       <img src={Imagegreen} alt="" className='Image4'/>
       <img src={Imagegreen} alt="" className='Image5'/>
      <h2>Conectando Codigo</h2>
      <p>ARC-DEVs is here to revolutionize the financial service industry.<br />We are using cutting-edge technology to bring you the best experience.</p>  <KeywordsWrapper>
        <p>Design UI/UX</p>
        <p>Web Development</p>
        <p>Big Data</p>
        <p>APIs</p>
        <p>Machine Learning</p>
        <p>Mobile App</p>
      </KeywordsWrapper>
    </RobotSectionWrapper>
  )
}
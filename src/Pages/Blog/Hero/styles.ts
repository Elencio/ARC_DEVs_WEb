import styled from "styled-components";
import Hero from "../../../assets/pexels-pavel-danilyuk-8438944.jpg"

export const HeroSection = styled.section`
  background: url(${Hero}) no-repeat center center;
  background-size: cover;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0 0 0 0.8px #dfdfdf;
`;


export const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
export const Tag = styled.div`
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

export const Heading = styled.h1`
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

export const Subheading = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #dfdfdf;
  font-family: "FontTT", sans-serif;
  line-height: 1.7;
  letter-spacing: 1.25%;
`;


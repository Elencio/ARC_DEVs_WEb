import styled from 'styled-components';
import FontSpart from "../fonts/league-spartan/LeagueSpartan-Bold.otf"
import { NavLink } from 'react-router-dom';
import FonTTT from "../fonts/Font files/otf-files/TT Norms Std Condensed Regular.otf"


const GetStartedTodaySectionWrapper = styled.div`

  @font-face {
    font-family: "FontSpart" ;
    src: url(${FontSpart});
  }

  @font-face {
    font-family: "FonTTT" ;
    src: url(${FonTTT});
  }



  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  border-radius: 50px 0 0 50px;
  margin-bottom: 2rem;

  & h2 {
    font-size: 1.25rem;
    margin-bottom: 50px;
    line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 500;
  color: #c2c2c2;
  }

  & p {
    font-size: 1.125rem;
    margin-bottom: 80px;
    max-width: 600px;
    text-align: center;
    line-height: 1.75rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    letter-spacing: 0.001rem;
  color: #dfdfdf;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  padding: 1rem 5rem;
  line-height: 1.5rem;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
  border: none;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  color: #dfdfdf;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 0 0.5px #e5e7eb;

  &:hover {
    background-color: #34d399;
    color: #121212;
  }

  /* Remove underline on the text */
  text-decoration: none;
`;

export function GetStartedTodaySection(){
  return (
    <GetStartedTodaySectionWrapper>
      <h2>Get Started Today</h2>
      <p>
        Start managing your finances more efficiently and effectively with ARC-DEVs today.
      </p>
      <NavLink to="/Contact">
      <StyledButton>Hire us</StyledButton>
    </NavLink>
    </GetStartedTodaySectionWrapper>
  );
}

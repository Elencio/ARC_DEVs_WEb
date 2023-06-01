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
    font-size: 1.6rem;
    margin-bottom: 50px;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  }

  & p {
    font-size: 1.2rem;
    margin-bottom: 80px;
    max-width: 600px;
    text-align: center;
    font-family: 'FonTTT', sans-serif;
    letter-spacing: 0.001rem;
    line-height: 1.7rem;
  font-weight: 300;
  color: #c2c2c2;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  font-family: 'Roboto' sans-serif;
  border: none;
  border-radius: 0.5rem;
  color: #8257e5;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 0 0.5px #8257e5;

  &:hover {
    background-color: #8257e5;
    color: #fff;
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

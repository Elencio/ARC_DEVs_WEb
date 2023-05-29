import styled from 'styled-components';

const GetStartedTodaySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  border-radius: 50px 0 0 50px;
  margin-bottom: 2rem;

  & h2 {
    font-size: 2.5rem;
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
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  }

  button {
    padding: 12px 25px;
    margin: 0 20px;
    background-color: #8257e5;
    font-family: 'Roboto' sans-serif;
    border: none;
    border-radius: 30px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export function GetStartedTodaySection(){
  return (
    <GetStartedTodaySectionWrapper>
      <h2>Get Started Today</h2>
      <p>
        Start managing your finances more efficiently and effectively with ARC-DEVs today.
      </p>
      <button>Open Your Account</button>
    </GetStartedTodaySectionWrapper>
  );
}

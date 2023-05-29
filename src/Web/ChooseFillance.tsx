import styled from 'styled-components';

const WhyChooseIntellifinanceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  border-radius: 0 50px 50px 0;

  & h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  }

  & p {
    font-size: 1.1rem;
    margin-bottom: 80px;
    line-height: 1.7rem;
    max-width: 600px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & button {
    padding: 12px 25px;
    margin: 0 20px;
    background-color: #8257e5;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 0 0 0.5px #c2c2c2;
    border: none;
    border-radius: 30px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export function WhyChooseIntellifinanceSection(){
  return (
    <WhyChooseIntellifinanceSectionWrapper>
      <h2>Why Choose Intellifinance</h2>
      <p>
        We offer a variety of features and benefits that set us apart. See why you should choose us:
      </p>
      <ButtonsWrapper>
        <button>Learn More</button>
        <button>Open Your Account</button>
      </ButtonsWrapper>
    </WhyChooseIntellifinanceSectionWrapper>
  );
}

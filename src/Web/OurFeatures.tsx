
import styled from 'styled-components';

const OurFeaturesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  border-radius: 0 50px 50px 0;
  background-image: radial-gradient(87% 50% at 50% -38%,  #233d48 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 20%, rgba(0, 0, 0, .07) 0, rgba(22, 21, 21, 0.4) 100%);

  & h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  line-height: 1.7rem;
  }

  & p {
    font-size: 1.1rem;
    line-height: 1.7rem;
    margin-bottom: 80px;
    max-width: 600px;
    line-height: 1.7rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin-top: 30px;
`;

const FeatureCard = styled.div`
  display: flex;
  gap:0.3rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  align-self: stretch;
  backdrop-filter: none;
  background-color: initial;
  background-image: radial-gradient(87% 50% at 50% -38%, rgba(255, 255, 255, .05) 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 0, rgba(0, 0, 0, .07) 0, rgba(0, 0, 0, .4) 100%);
  border-radius: 28px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 1px inset;
  border-radius: 10px;
  margin-bottom: 30px;
 

  & h3 {
    font-size: 1.4rem;
    margin-top: 10px;
    color: white;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #687df8;
  }

  & p {
    font-size: 1rem;
    text-align: center;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #c2c2c2;
  }
`;

export function OurFeaturesSection(){
  return (
    <OurFeaturesSectionWrapper>
      <h2>Our Features</h2>
      <p>
        We offer several unique features that will make your financial experience more enjoyable and efficient.
      </p>
      <FeaturesWrapper>
        <FeatureCard>
         
          <h3>Mobile App</h3>
          <p>Our mobile app is the easiest way to manage your finances on the go.</p>
        </FeatureCard>
        <FeatureCard>
       
          <h3>Personalized Recommendations</h3>
          <p>We use advanced algorithms to offer personalized recommendations.</p>
        </FeatureCard>
        <FeatureCard >
         
          <h3>24/7 Customer Support</h3>
          <p>Our experienced support team is available around the clock to assist you.</p>
        </FeatureCard>
        <FeatureCard>
          
          <h3>Easy Budgeting</h3>
          <p>Our budgeting tools make it easy to keep track of your finances.</p>
        </FeatureCard>
      </FeaturesWrapper>
    </OurFeaturesSectionWrapper>
  );
}

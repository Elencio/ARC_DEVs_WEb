import styled from 'styled-components';
import { useState } from 'react';
import FontTT from "../fonts/Font files/otf-files/TT Tricks Regular.otf"
import FontSpart from "../fonts/league-spartan/LeagueSpartan-Bold.otf"
import FacebookIcon from "../assets/facebook-1.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import GithubIcon from "../assets/github-2.svg"
import { FooterSocialMediaWrapper } from "./Footer"
import logo from "../assets/default-monochrome.svg"


const ContactFormContainer = styled.div`

@font-face {
    font-family: "FontSpart" ;
    src: url(${FontSpart});
  }

  @font-face {
    font-family: "FontTT" ;
    src: url(${FontTT});
  }



  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 5rem;
  padding: 5rem 2rem;

  h2, p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "FontTT", sans-serif;
  letter-spacing: 1.25%;
  line-height: 1.7;
  color: #c4c4c4;
  }


  form {
    width: 600px;
  }
`;

const Description = styled.p`
font-family: "FontSpart", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: "FontTT", sans-serif;
  letter-spacing: 1.25%;
  line-height: 1.7;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  align-items: start;


 & span{
  background-color: transparent;
  margin-right: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: "FontTT", sans-serif;
  font-size: 1rem;
  color: #9b59b6;
  box-shadow: 0 0 0 0.4px #9b59b6;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color:  #9b59b6;
    color: #fff;
  }
 } 
  

  span:nth-of-type(1) {
  color: #34495e;
  box-shadow: 0 0 0 0.4px #34495e;

  &:hover {
    background-color: #34495e;
    color: #fff;
  }
}

span:nth-of-type(2) {
  color:  #e67e22;
  box-shadow: 0 0 0 0.4px  #e67e22;

  &:hover {
    background-color:  #e67e22;
    color: #fff;
  }
  
}

span:nth-of-type(3) {
  color: #c0392b;
  box-shadow: 0 0 0 0.4px #c0392b;


  &:hover {
    background-color:  #c0392b;
    color: #fff;
  }
}
`;


const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: "FontTT", sans-serif;
  letter-spacing: 1.25%;
  line-height: 1.7;
  color: #c4c4c4;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #30373d;
  box-shadow: 0 0 0 0.2px #c4c4c4;
  color: #C4C4C4;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  height: 10rem;
  resize: vertical;
  background-color: #30373d;
  color: #c4c4c4;
`;

const Button = styled.button`
  box-shadow: 0 0 0 0.2px #1c9cea;
  background-color: transparent;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "FontTT", sans-serif;
  letter-spacing: 1.25%;
  line-height: 1.7;

  &:hover {
    background-color: #1472b0;
  }
`;

export const Container = styled.div`
     display: flex;
     flex-direction: column;
     align-items: start;
     gap: 1rem;

     
  .logo {
    width: 170px;
  }
`

export function ContactForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactFormContainer>
      <Container>
      <img src={logo} alt="" className='logo'/>
      <Description>Entre em contato conosco</Description>
      <TagsContainer>
        <span>Desenvolvimento Web</span>
        <span>Data Science</span>
      </TagsContainer>
      <FooterSocialMediaWrapper>
             <img src={FacebookIcon} alt="" />
             <img src={GithubIcon} alt="" />
             <img src={LinkedinIcon} alt="" />
      </FooterSocialMediaWrapper>
      </Container>
     
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="message">Mensagem</Label>
          <TextArea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </InputContainer>
        <Button type="submit">Enviar</Button>
      </form>
    </ContactFormContainer>
  );
}


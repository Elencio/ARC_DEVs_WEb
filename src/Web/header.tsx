import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  position: fixed;
  background-color: #23252780;
  width: 100%;
  padding: 0.5rem 2.5rem;
  align-items: center;
  box-sizing: border-box;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  color: #fff;
  line-height: 1.7rem;
  font-size: 1.2rem;
  }
`;



const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap:2rem;
`;


const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #303146;
    text-align: center;
    transition: all 0.5s ease-in-out;
    transform: translateY(-150);
  }
`;

const MenuItem = styled.li`
  margin: 0px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
  

  border-bottom: 3px solid #7800fd;

  }

  @media only screen and (max-width: 768px) {
    margin: 20px 0;
    font-weight: 400;
  }
`;

const OpenAccountButton = styled.button`
  padding: 12px 24px;
  background-color: #303146;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 0 0.1px #c2c2c2;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #c2c2c2;
  font-size: 0.8rem;

  &:hover {
    background-color: #484d5b;
  }
`;

export function Header(){
  
  return (
    <HeaderWrapper>
      <span>ARC-DEVs</span>
      <Navigation>
        <MenuList >
          <MenuItem>Features</MenuItem>
          <MenuItem>Learn</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
        <OpenAccountButton>Open Account</OpenAccountButton>
      </Navigation>
    </HeaderWrapper>
  );
}


import {Header, Logo, Nav, NavLink} from "./styles"
import logo from "../../../assets/default-monochrome.svg"


export function HeaderContainer() {

  return (
    <Header>
    <Logo src={logo} alt="Logo" />
    <Nav>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About Us</NavLink>
      <NavLink href="#">Contact</NavLink>
    </Nav>
  </Header>
  )

}
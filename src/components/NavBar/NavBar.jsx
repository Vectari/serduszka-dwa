import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";
import { Logo } from "../Logo/Logo";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.navbar_background};
  padding-top: 1rem;
  font-size: 1.3rem;

  a {
    color: ${theme.navbar_text};
    padding: 1.5rem;
    text-decoration: none;
    transition: 0.5 ease;
  }

  a:hover {
    color: ${theme.navbar_text_hover};
    transition: 0.3s;
  }

  .active {
    pointer-events: none;
    color: ${theme.navbar_text_hover};
    /* font-weight: bold; */
  }
`;

const StyledLeftContainer = styled.div`
  text-align: left;
`;

const StyledLogoContainer = styled.div`
  text-align: center;

  img {
    scale: 0.15;
    margin-top: -5.5rem;
  }

  p {
    margin-top: -5.5rem;
  }
`;

const StyledRightContainer = styled.div`
  text-align: right;
`;

export function NavBar() {
  return (
    <StyledNavBar>
      <StyledLeftContainer>
        <NavLink to="/">Główna</NavLink>
        <NavLink to="/info">Informacje</NavLink>
        <NavLink to="/pricelist">Cennik</NavLink>
      </StyledLeftContainer>
      <StyledLogoContainer>
        <Logo />
        <p>Serduszka Dwa</p>
      </StyledLogoContainer>
      <StyledRightContainer>
        <NavLink to="/reviews">Opinie klientów</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/map">Dojazd</NavLink>
      </StyledRightContainer>
      {/* <NavLink to="/alert">Alert</NavLink> */}
    </StyledNavBar>
  );
}

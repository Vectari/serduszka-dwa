import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";
import { Logo } from "../Logo/Logo";
import { dictionary } from "../../dictionary";
import { useState } from "react";

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.navbar_background};
  font-size: 1rem;
  padding: 1rem 3rem;
  position: relative;
  @media (max-width: ${dictionary.width.mobile}) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const StyledLogoContainer = styled.div`
  align-self: start;

  div {
    width: 140px;
    margin-top: -6.8rem;
  }
`;

const NavLinkWrapper = styled.div`
  margin-top: -3rem;

  @media (max-width: ${dictionary.width.mobile}) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: ${theme.navbar_text};
  margin-left: 0.8rem;

  &:hover {
    color: ${theme.navbar_text_hover};
    transition: 0.3s;
  }

  &.active {
    pointer-events: none;
    color: ${theme.navbar_text_hover};
  }

  @media (max-width: ${dictionary.width.mobile}) {
    display: block;
    margin: 1.4rem auto;

    &:first-child {
      border-top: 1px solid ${theme.border_and_lines};
      width: 90vw;
      border-radius: 1rem;
    }

    &:last-child {
      border-bottom: 1px solid ${theme.border_and_lines};
      width: 90vw;
      border-radius: 1rem;
    }
  }
`;

const StyledFontIcon = styled.span`
  display: none;
  position: absolute;
  right: 1.5rem;
  top: -0.1rem;
  color: ${theme.navbar_text};
  font-size: 2.6rem;
  cursor: pointer;

  &:hover {
    color: ${theme.navbar_text_hover};
    transition: 0.3s;
  }

  @media (max-width: ${dictionary.width.mobile}) {
    display: block;
  }
`;

export function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <NavBarWrapper>
      <StyledLogoContainer>
        <Logo to={"/"} />
      </StyledLogoContainer>
      <StyledFontIcon onClick={() => setActive(!active)}>
        &equiv;
      </StyledFontIcon>
      <NavLinkWrapper active={active} onClick={() => setActive(!active)}>
        <StyledNavLink to="/">{dictionary.navbar.home_page}</StyledNavLink>
        <StyledNavLink to="/info">{dictionary.navbar.info_page} </StyledNavLink>
        <StyledNavLink to="/pricelist">
          {dictionary.navbar.price_page}
        </StyledNavLink>
        <StyledNavLink to="/reviews">
          {dictionary.navbar.reviews_page}
        </StyledNavLink>
        <StyledNavLink to="/contact">
          {dictionary.navbar.contact_page}
        </StyledNavLink>
        <StyledNavLink to="/map">{dictionary.navbar.map_page}</StyledNavLink>
      </NavLinkWrapper>

      {/* <NavLink to="/alert">Alert</NavLink> */}
    </NavBarWrapper>
  );
}

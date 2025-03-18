import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

const StyledNavBar = styled.div`
  background-color: ${theme.navbar_background};
  text-align: right;
  margin: auto;
  padding: 1rem;

  a {
    color: ${theme.navbar_text};
    padding: 1.5rem;
    text-decoration: none;
    transition: 0.5 ease;
  }

  a:hover {
    text-decoration: underline ${theme.text_navbar};
  }

  .active {
    color: ${theme.navbar_text_active};
    pointer-events: none;
  }
`;

export function NavBar() {
  return (
    <StyledNavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/info">Info</NavLink>
      <NavLink to="/pricelist">Price List</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/alert">Alert</NavLink>
    </StyledNavBar>
  );
}

import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./NavBar.styled";

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

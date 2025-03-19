/* eslint-disable react/prop-types */

import styled from "styled-components";
import { theme } from "../../theme";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${theme.button_primary_white};
  background-color: ${theme.button_primary_background};
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 1.3rem;
  text-align: center;
  cursor: pointer;
`;

export function Button({ title, to }) {
  return <StyledNavLink to={to}>{title}</StyledNavLink>;
}

import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { theme } from "../../theme";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { dictionary } from "../../dictionary";

const StyledFooterWrapper = styled.div`
  display: flex;
  border-top: 2px solid ${theme.border_and_lines};
  margin-top: 3rem;
  padding: 0 1rem;
  justify-content: space-between;

  @media (max-width: ${dictionary.width.mobile}) {
    display: block;
    text-align: center;
  }
`;

const StyledLogoWrapper = styled.div`
  svg {
    scale: 0.33;
  }
`;

const StyledLeftSide = styled.div`
  margin-top: -5rem;

  @media (min-width: ${dictionary.width.mobile - 1}) {
    margin-left: -5em;
  }
`;

const StyledPhoneMailWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const StyledRightSide = styled.div`
  margin-top: 1rem;
`;

const StyledSocial = styled.div`
  color: ${theme.text_on_background};
  text-align: center;

  svg {
    scale: 1.5;
    padding: 0.7rem;
  }
`;

const StyledNavLinkWrapper = styled.div`
  display: grid;
  text-align: right;

  @media (max-width: ${dictionary.width.mobile}) {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: ${theme.text_on_background};

    &:hover {
      color: ${theme.navbar_text_hover};
      transition: 0.3s;
    }

    &.active {
      pointer-events: none;
      color: ${theme.navbar_text_hover};
    }
  }

  .creator {
    border-top: 1px solid ${theme.border_and_lines};
    color: ${theme.border_and_lines};
    margin-top: 2rem;
    font-size: 0.5rem;
  }
`;

export function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top when route changes
  }, [location.pathname]);

  return (
    <StyledFooterWrapper>
      <StyledLeftSide>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
        <StyledPhoneMailWrapper>
          <p>{dictionary.main_info.phone_numer}</p>
          <p>{dictionary.main_info.email}</p>
        </StyledPhoneMailWrapper>
      </StyledLeftSide>
      <StyledRightSide>
        <StyledSocial>
          <FaFacebook />
          <FaGoogle />
        </StyledSocial>
        <StyledNavLinkWrapper>
          <NavLink to="/">{dictionary.navbar.home_page}</NavLink>
          <NavLink to="/info">{dictionary.navbar.info_page}</NavLink>
          <NavLink to="/pricelist">{dictionary.navbar.price_page}</NavLink>
          <NavLink to="/reviews">{dictionary.navbar.reviews_page}</NavLink>
          <NavLink to="/contact">{dictionary.navbar.contact_page}</NavLink>
          <NavLink to="/map">{dictionary.navbar.map_page}</NavLink>
          <p className="creator">Created by Mateusz Majer</p>
        </StyledNavLinkWrapper>
      </StyledRightSide>
    </StyledFooterWrapper>
  );
}

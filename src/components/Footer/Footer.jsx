import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { theme } from "../../theme";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { dictionary } from "../../dictionary";

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  padding: 2rem 0.5rem 1rem 0.5rem;
  border-top: 0.2rem solid ${theme.border_and_lines};
  text-align: center;
`;

const StyledFooterLeft = styled.div`
  text-align: left;
  padding-left: 3rem;
`;

const StyledFooterRight = styled.div`
  text-align: right;
  padding-right: 6rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  a {
    color: ${theme.navbar_text};
    text-decoration: none;
    transition: 0.5s ease;
  }

  a:hover {
    color: ${theme.navbar_text_hover};
    transition: 0.3s;
  }

  .active {
    pointer-events: none;
    color: ${theme.navbar_text_hover};
  }
`;

const StyledLogoContainer = styled.div`
  text-align: center;

  img {
    scale: 0.15;
    margin-top: -4.5rem;
  }

  p {
    margin-top: -5.5rem;
  }
`;

const StyledFooterCenter = styled.div`
  text-align: center;
  font-size: 0.7rem;
  margin-top: 1rem;
  margin-left: -2rem;
`;

const StyledFooterSocial = styled.div`
margin-top: 2rem;
scale: 1.5;
margin-left: -32rem;

  svg {
    padding-right: 1.5rem;
  }
`;

export function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top when route changes
  }, [location.pathname]);

  return (
    <>
      <StyledFooterContainer>
        <StyledFooterLeft>
          <StyledLogoContainer>
            <Logo />
            <p>Serduszka Dwa</p>
            <span>
              <FaPhone />
              {dictionary.main_info.phone_numer}
            </span>
            <br />
            <span>
              <MdOutlineAlternateEmail />
              {dictionary.main_info.email}
            </span>
          </StyledLogoContainer>
        </StyledFooterLeft>
        <StyledFooterRight>
          <NavLink to="/">{dictionary.navbar.home_page}</NavLink>
          <NavLink to="/info">{dictionary.navbar.info_page}</NavLink>
          <NavLink to="/pricelist">{dictionary.navbar.price_page}</NavLink>
          <NavLink to="/reviews">{dictionary.navbar.reviews_page}</NavLink>
          <NavLink to="/contact">{dictionary.navbar.contact_page}</NavLink>
          <NavLink to="/map">{dictionary.navbar.map_page}</NavLink>
        </StyledFooterRight>
        <StyledFooterSocial>
          <FaFacebook />
          <FaGoogle />
        </StyledFooterSocial>
      </StyledFooterContainer>
      <StyledFooterCenter>Created by Mateusz Majer</StyledFooterCenter>
    </>
  );
}

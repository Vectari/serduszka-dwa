import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageDetail} from 'react-icons/bi'

const StyledNav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

const StyledAnchor = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;
  :hover {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;

const NavBar = () => {
  // const [activeNav, setActiveNav] = useState("#");
  return (
    <StyledNav>
      {/* <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}></a> */}
      <StyledAnchor><AiOutlineHome /></StyledAnchor>
      <StyledAnchor><AiOutlineUser /></StyledAnchor>
      <StyledAnchor><BiBook /></StyledAnchor>
      <StyledAnchor><BiMessageDetail /></StyledAnchor>
    </StyledNav>
  );
};

export default NavBar;

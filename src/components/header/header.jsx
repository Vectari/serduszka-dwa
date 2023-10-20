import styled from "styled-components";
import logo from "../../theme/logo.png";

const StyledTitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.6rem;
  font-family: "Great Vibes";
  font-size: 2.1rem;
  /* position: fixed; */
`;

const StyledImg = styled.img`
  width: 5rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: -1.3rem;
`;

const Header = () => {
  return (
    <>
      <StyledTitle>
        Serduszka Dwa <StyledImg src={logo} alt="logo" />
      </StyledTitle>
    </>
  );
};

export default Header;

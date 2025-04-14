import styled from "styled-components";
import GOOGLE_REVIEW from "../../media/google_reviews.png";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

const ReviewWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${theme.navbar_text};
  text-align: center;
`;

const StyledImg = styled.img`
  width: 55%;
  height: 60%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
  margin: auto;
`;

export function Reviews() {
  return (
    <>
      <ReviewWrapper to="https://search.google.com/local/writereview?placeid=ChIJNRzA9d0TA0cRZ2J7UHzeIHY">
        <StyledImg src={GOOGLE_REVIEW} alt="google reviews" />
        <h3>Oceń nas w Google!</h3>
      </ReviewWrapper>
      <h2>listy</h2>
    </>
  );
}

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";
import GOOGLE_REVIEW from "../../media/google_reviews.png";

import IMG1 from "../../media/cards/2 - list.jpg";
import IMG2 from "../../media/cards/4 - list.jpg";
import IMG3 from "../../media/cards/10 - list.jpg";
import IMG4 from "../../media/cards/12 - list.jpg";
import IMG5 from "../../media/cards/14 - list.jpg";
import IMG6 from "../../media/cards/15 - list.jpg";
import IMG7 from "../../media/cards/16 - list.jpg";
import IMG8 from "../../media/cards/17 - list.jpg";
import IMG9 from "../../media/cards/18 - list.jpg";
import IMG10 from "../../media/cards/19 - list.jpg";

const imagePaths = [
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG7,
  IMG8,
  IMG9,
  IMG10,
];

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

const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 600px;

  &::-webkit-scrollbar {
    /* -webkit-appearance: none; */
  }

  img {
    width: 55%;
    height: 60%;
    border-radius: 1rem;
    object-fit: cover;
    object-position: center;
    margin: 0.5rem auto;
  }
`;

export function Reviews() {
  return (
    <>
      <ReviewWrapper to="https://search.google.com/local/writereview?placeid=ChIJNRzA9d0TA0cRZ2J7UHzeIHY">
        <StyledImg src={GOOGLE_REVIEW} alt="google reviews" />
        <h3>Oceń nas w Google!</h3>
      </ReviewWrapper>
      <PhotosWrapper>
        {imagePaths.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </PhotosWrapper>
    </>
  );
}

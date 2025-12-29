import { useState, useEffect } from "react";
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
  width: 90%;
  max-width: 400px;
  height: auto; /* automatyczna wysokość */
  border-radius: 1rem;
  object-fit: cover;
  display: block;
  margin: 1rem auto; /* centrowanie poziome + mały margines pionowy */
`;

const PhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0.5rem;

  /* usuń max-height i overflow */
  /* max-height: 600px;
  overflow-y: auto; */

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 1rem;
  object-fit: contain;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  animation: scaleIn 0.25s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
`;

export function Reviews() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setActiveImage]);

  return (
    <>
      <ReviewWrapper to="https://search.google.com/local/writereview?placeid=ChIJNRzA9d0TA0cRZ2J7UHzeIHY">
        <StyledImg src={GOOGLE_REVIEW} alt="google reviews" />
        <h3>Oceń nas w Google!</h3>
      </ReviewWrapper>
      <PhotosWrapper>
        {imagePaths.map((img, index) => (
          <PhotoCard key={index} onClick={() => setActiveImage(img)}>
            <img src={img} alt={`Image ${index + 1}`} />
          </PhotoCard>
        ))}
      </PhotosWrapper>

      {activeImage && (
        <LightboxOverlay onClick={() => setActiveImage(null)}>
          <LightboxImage
            src={activeImage}
            alt="Powiększone zdjęcie"
            onClick={(e) => e.stopPropagation()}
          />
        </LightboxOverlay>
      )}
    </>
  );
}

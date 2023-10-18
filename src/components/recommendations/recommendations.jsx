import styled from "styled-components";
import PhotoAlbum from "react-photo-album";
import newspaper from "../../media/13.jpg";
import photo1 from "../../media/2 - list.jpg";
import photo2 from "../../media/4 - list.jpg";
import photo3 from "../../media/10 - list.jpg";
import photo4 from "../../media/12 - list.jpg";
import photo5 from "../../media/14 - list.jpg";
import photo6 from "../../media/15 - list.jpg";
import photo7 from "../../media/16 - list.jpg";
import photo8 from "../../media/17 - list.jpg";
import photo9 from "../../media/18 - list.jpg";
import photo10 from "../../media/19 - list.jpg";
import { theme } from "../../theme/theme";

const StyledArticleHeader = styled.h2`
  width: 90%;
  margin: 0.8rem auto;
  padding: 10px 0 10px 0;
  font-family: "Roboto";
  border-top: 1px solid ${theme.colors.articlelines};
  border-bottom: 1px solid ${theme.colors.articlelines};
`;

const StyledImg = styled.img`
  width: 95%;
  border-radius: 0.5rem;
`;

const StyledGallery = styled.dev`
  width: 95%;
`;

const Rec = () => {
  const photos = [
    { src: `${photo1}`, width: 400, height: 300 },
    { src: `${photo2}`, width: 400, height: 300 },
    { src: `${photo3}`, width: 400, height: 300 },
    { src: `${photo4}`, width: 400, height: 300 },
    { src: `${photo5}`, width: 400, height: 300 },
    { src: `${photo6}`, width: 400, height: 300 },
    { src: `${photo7}`, width: 400, height: 300 },
    { src: `${photo8}`, width: 400, height: 300 },
    { src: `${photo9}`, width: 400, height: 300 },
    { src: `${photo10}`, width: 400, height: 300 },
  ];

  return (
    <>
      <StyledArticleHeader id="rec">
        Biuro Serduszka Dwa w prasie
      </StyledArticleHeader>
      <StyledImg src={newspaper} alt="article in newspaper" />
      <StyledArticleHeader>Zadowoleni klienci</StyledArticleHeader>
      <StyledGallery>
        <PhotoAlbum layout="rows" photos={photos} />
      </StyledGallery>
    </>
  );
};

export default Rec;

import styled from "styled-components";
import newspaper from '../../media/13.jpg'
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

const Rec = () => {
  return (
    <>
      <StyledArticleHeader id="rec">
        Biuro Serduszka Dwa w prasie
      </StyledArticleHeader>
      <StyledImg src={newspaper} alt="article in newspaper"/>
      <StyledArticleHeader>Zadowoleni klienci</StyledArticleHeader>
    </>
  );
};

export default Rec;

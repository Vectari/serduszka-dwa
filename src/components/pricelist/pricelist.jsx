import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledArticleHeader = styled.h2`
  width: 90%;
  margin: 0.8rem auto;
  padding: 10px 0 10px 0;
  font-family: "Roboto";
  border-top: 1px solid ${theme.colors.articlelines};
  border-bottom: 1px solid ${theme.colors.articlelines};
`;

const PriceList = () => {
  return (
    <>
      <StyledArticleHeader id="pricelist">Cennik</StyledArticleHeader>

      {/* TODO
    1. cennik i zdjęcie obok siebie
    2. czeste pytania
    3. kontakt
    4. mail
    5. mapka */}
    </>
  );
};

export default PriceList;

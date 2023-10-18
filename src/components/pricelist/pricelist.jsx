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
    </>
  )
}

export default PriceList;

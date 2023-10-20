import styled from "styled-components";
import coupleDance from "../../media/couple-dance.jpg";
import { theme } from "../../theme/theme";

const StyledArticleHeader = styled.h2`
  width: 90%;
  margin: 0.8rem auto;
  padding: 10px 0 10px 0;
  font-family: "Roboto";
  border-top: 1px solid ${theme.colors.articlelines};
  border-bottom: 1px solid ${theme.colors.articlelines};
`;

const StyledPicAndPrice = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 45%;
  /* margin-right: 10px; */
  /* flex: 1; */
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    margin: auto;
    width: 70%;
    flex: 1;
  }
`;

const StyledPrice = styled.p`
  width: 90%;
  /* flex: 1; */
  margin: auto auto auto 10px;
  font-size: 2rem;
  font-family: "Roboto";
  @media (max-width: 768px) {
    margin: auto;
    flex: 1;
  }
`;

const PriceList = () => {
  return (
    <>
      <StyledArticleHeader id="pricelist">Cennik</StyledArticleHeader>
      <StyledPicAndPrice>
        <StyledImg src={coupleDance} alt="dancing couple" />
        <StyledPrice>
          <h3>Opłata za usługi Biura Serduszka Dwa</h3>
          <h2>660 zł</h2>
          <br /> Czas trwania abonamentu:
          <br />
          <u>
            <strong>PÓŁ ROKU!</strong>
          </u>
          <br />
          <br /> Istnieje też możliwość płatności za jedną ofertę: <br />
          <strong>260 zł.</strong>
        </StyledPrice>
      </StyledPicAndPrice>

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

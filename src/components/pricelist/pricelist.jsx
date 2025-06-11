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
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    margin: auto;
    width: 70%;
    flex: 1;
  }
`;

const StyledPrice = styled.article`
  width: 90%;
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
          <h2>760 zł - 860 zł</h2>
          <p>W zależności od trudności sprawy Klienta.</p>
          <h3>Usługa VIP - dodatkowa usługa dla Klientów, do kwoty abonamentu plus 160 zł.</h3>
          <br /> Czas trwania abonamentu:
          <br />
          <u>
            <strong>PÓŁ ROKU!</strong>
          </u>
          <br />
          <br /> Istnieje też możliwość płatności za jedną ofertę: <br />
          <strong>260-300 zł.</strong>
        </StyledPrice>
      </StyledPicAndPrice>
      <p>
        Kwota płatności może być inna tzn. wyższa, indywidualnie ustalona z
        Klientką/Klientem jeśli trudność usługi tego wymaga, oczekiwania
        Klientów są ofertą VIP. - specjalnymi wymogami, na które to, Biuro
        Serduszka Dwa na życzenie Klientów musi zadbać i specjalnie zwrócić
        uwagę.
      </p>
    </>
  );
};

export default PriceList;

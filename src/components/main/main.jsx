import styled from "styled-components";
import coupleinshadow from "../../media/coupleinshadow.jpg";
import couplehike from '../../media/couple-hike.jpg'
import { theme } from "../../theme/theme";

const StyledImg = styled.img`
  width: 95%;
  border-radius: 0.5rem;
`;

const StyledArticleHeader = styled.h2`
  width: 90%;
  margin: auto;
  padding: 10px 0 10px 0;
  font-family: "Roboto";
  border-top: 1px solid ${theme.colors.articlelines};
  border-bottom: 1px solid ${theme.colors.articlelines};
`;

const StyledArticle = styled.article`
  width: 90%;
  margin: auto;
  font-size: 1.3rem;
  font-family: "Roboto";
`;

const StyledArticleSteps = styled.article`
  width: 90%;
  margin: 5px auto;
  font-size: 1.3rem;
  font-family: "Roboto";
`;

const Main = () => {
  return (
    <>
      <StyledImg src={coupleinshadow} alt="couple in shadow" />
      <StyledArticle id="main">
        Biuro Serduszka Dwa zaprasza osoby samotne, poszukujące wymarzonego
        partnera życiowego, przyjaciółki/przyjaciela lub po prostu, kogoś z kim
        wspólnie można wyjść na kawę lub pojechać na wspólne wakacje. Biuro
        posiada foto-oferty osób w wieku <strong>od 24 lat do 84 lat.</strong>
        <br />
        <br />
        <strong>Nie publikujemy wizerunku klientów w internecie.</strong> Biuro
        Serduszka Dwa zamieszcza swoje reklamy głównie w dwóch województwach:
        <strong>kujawsko-pomorskie i pomorskie</strong>, ale jesteśmy otwarci na
        każdą osobę która chciałby skorzystać z usług biura, niezależnie od
        lokalizacji.
      </StyledArticle>
      <br />
      <StyledArticleHeader>
        Jak zostać Klientem Biura Serduszka Dwa
      </StyledArticleHeader>
      <br />
      <StyledArticleSteps>
        <strong>1.</strong> Skontaktuj się z nami w celu umówienia wizyty lub
        rozmowy telefonicznej.
      </StyledArticleSteps>
      <br />
      <StyledArticleSteps>
        <strong>2.</strong> Odpowiedz na pytania zadane przez pracownika Biura w
        celu przedstawienia swojej osoby i przedstawienia swoich oczekiwań
        względem poszukiwanego partnera.
      </StyledArticleSteps>
      <br />
      <StyledArticleSteps>
        <strong>3.</strong> Uiść opłatę za usługi Biura Serduszka Dwa.
      </StyledArticleSteps>
      <br />
      <StyledArticleSteps>
        <strong>4.</strong> W ciągu 2-4 dni otrzymasz z Biura pierwszą
        wytypowaną propozycję poznania partnera.
      </StyledArticleSteps>
      <br />
      <StyledArticleSteps>
        <strong>5.</strong> Po wyrażeniu chęci poznania się przez obie strony
        zostaniecie wymienieni numerami kontaktowymi. Teraz wszystko w Waszych
        rękach!
      </StyledArticleSteps>
      <StyledImg src={couplehike} alt="couple hiking" />
    </>
  );
};

export default Main;

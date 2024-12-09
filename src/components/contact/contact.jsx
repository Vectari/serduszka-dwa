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

const StyledContact = styled.article`
  width: 90%;
  margin: 5px auto 110px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Roboto";
`;

const Contact = () => {
  const email = "biuroserduszkadwa@gmail.com";
  const subject = "Wiadomość ze strony serduszkadwa.pl";
  const body = "Dzień dobry...";

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const phoneNumber = "883-783-782";

  return (
    <>
      <StyledArticleHeader id="contact">Kontakt</StyledArticleHeader>
      <StyledContact>
        <h3>Adres:</h3> Biuro Matrymonialne i Partnerskie
        <br /> "Serduszka Dwa" <br />
        ul. Grundwaldzka 73/3
        <br /> 85-239 Bydgoszcz <h3>Kontakt:</h3>{" "}
        <a href={mailtoUrl}>biuroserduszkadwa@gmail.com</a>
        <br />
        <br />
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </StyledContact>

      {/* TODO
    4. mail
    5. mapka */}
    </>
  );
};

export default Contact;

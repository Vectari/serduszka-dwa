/* eslint-disable react/no-unknown-property */

import styled from "styled-components";
import { theme } from "../../theme";

const mailtoUrl = "biuroserduszkadwa@gmail.com";
const phoneNumber = "123123123";

const StyledMapConatiner = styled.div`
  display: flex;
`;

const StyledGoogleMap = styled.iframe`
  margin: 0 auto;
  width: 800px;
  height: 600px;
  border-radius: 1rem;
  border: 0.2rem solid ${theme.border_and_lines};
`;

const StyledContactInfo = styled.div`
  text-align: center;
`;

export function Map() {
  return (
    <StyledMapConatiner>
      <StyledGoogleMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.8923383023093!2d17.974213977071763!3d53.13007819088285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313ddf5c01c35%3A0x7620de7c507b6267!2sSerduszka%20Dwa%20-%20Biuro%20partnersko%20-%20matrymonialne!5e0!3m2!1spl!2spl!4v1742457533988!5m2!1spl!2spl"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></StyledGoogleMap>
      <StyledContactInfo>
        <h3>Adres:</h3> Biuro Matrymonialne i Partnerskie
        <p>&quot;Serduszka Dwa&quot;</p>
        ul. Grundwaldzka 73/3
        <br /> 85-239 Bydgoszcz <h3>Kontakt:</h3>{" "}
        <a href={mailtoUrl}>biuroserduszkadwa@gmail.com</a>
        <br />
        <br />
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </StyledContactInfo>
    </StyledMapConatiner>
  );
}

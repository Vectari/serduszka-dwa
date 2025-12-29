import styled from "styled-components";
import { dictionary } from "../../dictionary";
import { theme } from "../../theme";
import COUPLE_PHOTO from "../../media/couple_price_page.jpg";

const PriceListWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledPriceHeader = styled.h2`
  color: ${theme.section_two_text_on_background};
  background-color: ${theme.section_two_background};
  border-radius: 1rem;
  margin: auto;
  padding: 0.5rem 1rem;
  max-width: 90%;
`;

const StyledPrice = styled.p`
  color: ${theme.section_one_text_on_background};
  background-color: ${theme.section_one_background};
  border-radius: 1rem;
  margin: 0.5rem auto 2rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  max-width: 75%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
`;

export function PriceList() {
  return (
    <PriceListWrapper>
      <h1>{dictionary.price_page.price_page_head}</h1>
      <StyledPriceHeader>
        {dictionary.price_page.price_page_subscription}
      </StyledPriceHeader>
      <StyledPrice>
        {dictionary.price_page.price_page_subscription_price}
      </StyledPrice>
      <StyledPriceHeader>
        {dictionary.price_page.price_page_one_offer}
      </StyledPriceHeader>
      <StyledPrice>
        {dictionary.price_page.price_page_one_offer_price}
      </StyledPrice>
      <StyledPriceHeader>
        {dictionary.price_page.price_page_vip_offer}
      </StyledPriceHeader>
      <StyledPrice>{dictionary.price_page.price_page_vip_price}</StyledPrice>
      <h1>{dictionary.price_page.price_page_info_head}</h1>
      <h3>{dictionary.price_page.price_page_info_one}</h3>
      <h3>{dictionary.price_page.price_page_info_two}</h3>
      <h3>{dictionary.price_page.price_page_info_three}</h3>
      <h3>{dictionary.price_page.price_page_info_four}</h3>

      <ImageWrapper>
        <StyledImg src={COUPLE_PHOTO} alt="couple photo" />
      </ImageWrapper>
    </PriceListWrapper>
  );
}

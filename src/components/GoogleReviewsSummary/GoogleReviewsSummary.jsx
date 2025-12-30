import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  background: #1f2225;
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  color: white;
  max-width: 520px;
  width: 100%;

  @media (max-width: 765px) {
    max-width: 90%;
  }
`;

const Title = styled.h4`
  font-weight: 500;
  margin-top: -0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 765px) {
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 765px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

const Bars = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
`;

const Label = styled.span`
  font-size: 0.85rem;
  opacity: 0.9;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 8px;
  background: #3f4244;
  border-radius: 10px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  width: ${({ value }) => value}%;
  background: #fbbc04;
  border-radius: 10px;
  transition: width 0.3s ease;
`;

const Summary = styled.div`
  min-width: 90px;
  text-align: right;

  @media (max-width: 765px) {
    text-align: center;
  }
`;

const RatingValue = styled.div`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1;

  @media (max-width: 765px) {
    font-size: 2.4rem;
  }
`;

const Stars = styled.div`
  color: #fbbc04;
  font-size: 1rem;
  margin: 0.3rem 0;
`;

const Count = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export function GoogleReviewsSummary({ rating, totalReviews, stars, values }) {
  return (
    <Wrapper>
      <Title>Podsumowanie opinii w Google</Title>

      <Content>
        <Bars>
          {stars.map((star) => (
            <Row key={star}>
              <Label>{star}</Label>
              <BarBackground>
                <BarFill value={values[star]} />
              </BarBackground>
            </Row>
          ))}
        </Bars>

        <Summary>
          <RatingValue>{rating.toFixed(1).replace(".", ",")}</RatingValue>
          <Stars>★★★★★</Stars>
          <Count>{totalReviews} opinii</Count>
        </Summary>
      </Content>
    </Wrapper>
  );
}

GoogleReviewsSummary.propTypes = {
  rating: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
  stars: PropTypes.arrayOf(PropTypes.number).isRequired,
  values: PropTypes.objectOf(PropTypes.number).isRequired,
};

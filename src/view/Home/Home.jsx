import styled from "styled-components";
import coupleinshadow from "../../media/coupleinwhite.jpg";
import coupleonbridge from "../../media/couplebridge.jpg";
import coupledirtydancinggif from "../../media/couple_dirtydancing_gif_new.gif";
import { Button } from "../../components/Button/Button";
import { Highlights } from "../../components/Highlights/Highlights";
import { dictionary } from "../../dictionary";

const StyledImg = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const StyledHighlightsContainer = styled.div`
  display: block;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

const StyledContentOnMainPhoto = styled.div`
  position: absolute;
  padding: 2rem;
  padding-left: 5rem;
  max-width: 30vw;
  text-align: center;
`;

export function Home() {
  return (
    <>
      <StyledContentOnMainPhoto>
        <h1>{dictionary.home_page.sloga}</h1>
        <Button to="/contact" title={dictionary.home_page.slogan_button} />
      </StyledContentOnMainPhoto>
      <StyledImg src={coupleinshadow} alt="couple photo" />

      <h1>{dictionary.home_page.main_info_one_head}</h1>
      <p>{dictionary.home_page.main_info_one}</p>
      <h2>{dictionary.home_page.main_info_two_head}</h2>
      <p>{dictionary.home_page.main_info_two}</p>

      <StyledImg src={coupledirtydancinggif} alt="couple photo" />

      <h2>{dictionary.home_page.main_info_three_head}</h2>
      <p>{dictionary.home_page.main_info_three}</p>
      <h2>{dictionary.home_page.main_info_four_head}</h2>
      <p>{dictionary.home_page.main_info_four}</p>

      <StyledHighlightsContainer>
        <Highlights
          primary={true}
          header={dictionary.home_page.highlights.one_head}
          number={dictionary.home_page.highlights.one_number}
        />
        <Highlights
          primary={false}
          header={dictionary.home_page.highlights.two_head}
          number={dictionary.home_page.highlights.two_number}
        />
        <Highlights
          primary={true}
          header={dictionary.home_page.highlights.three_head}
          number={dictionary.home_page.highlights.three_number}
        />
        <Highlights
          primary={false}
          header={dictionary.home_page.highlights.four_head}
          number={dictionary.home_page.highlights.four_number}
        />
        <Highlights
          primary={true}
          header={dictionary.home_page.highlights.five_head}
          number={dictionary.home_page.highlights.five_number}
        />
        <Highlights
          primary={false}
          header={dictionary.home_page.highlights.six_head}
          number={dictionary.home_page.highlights.six_number}
        />
      </StyledHighlightsContainer>
      <h2>{dictionary.home_page.main_info_five_head}</h2>
      <p>{dictionary.home_page.main_info_five.a}</p>
      <p>{dictionary.home_page.main_info_five.b}</p>
      <p>{dictionary.home_page.main_info_five.c}</p>
      <p>{dictionary.home_page.main_info_five.d}</p>
      <p>{dictionary.home_page.main_info_five.e}</p>
      <p>{dictionary.home_page.main_info_five.f}</p>
      <StyledImg src={coupleonbridge} alt="couple photo" />
      <h2>{dictionary.home_page.main_info_six_head}</h2>
      <p>{dictionary.home_page.main_info_six}</p>
    </>
  );
}

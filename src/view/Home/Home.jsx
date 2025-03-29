import styled from "styled-components";
import coupleinshadow from "../../media/coupleinwhite.jpg";
import { Button } from "../../components/Button/Button";
import { Highlights } from "../../components/Highlights/Highlights";

const StyledImg = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const StyledHighlightsContainer = styled.div`
  display: grid;
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
        <h1>Chwytliwy slogan - Lorem, ipsum dolor.</h1>
        <Button to="/contact" title="Napisz do nas!" />
      </StyledContentOnMainPhoto>
      <StyledImg src={coupleinshadow} alt="couple photo" />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aut aperiam tempore, provident exercitationem animi recusandae ut quas
        enim temporibus, illo obcaecati dolorum sunt, aliquid laboriosam neque
        inventore. Ea adipisci voluptatem consequuntur magnam eius at eum et!
        Tenetur, porro! Laboriosam molestias commodi nesciunt veritatis
        similique asperiores placeat, reiciendis quia tempora autem a expedita
        voluptatibus quo, quis, in praesentium repellat deserunt nisi distinctio
        veniam quod. Ratione accusantium sed minima quaerat quam non nemo
        voluptatum corporis, odio similique provident fugit natus alias.
        Voluptas libero officiis tempore molestias excepturi ex voluptatibus
        magnam, consequatur dolore facere amet assumenda corporis repellendus
        minima sunt omnis voluptatem!
      </p>
      <h1>Home</h1>
      <StyledHighlightsContainer>
        <Highlights primary={true} header={"Lorem ipsum "} number={66} />
        <Highlights primary={false} header={"Lorem ipsum"} number={120} />
        <Highlights primary={true} header={"dolor sit"} number={48} />
        <Highlights primary={false} header={"Lorem ipsum "} number={520} />
        <Highlights primary={true} header={"sit amet"} number={19} />
        <Highlights primary={false} header={"ipsum dolor sit"} number={4320} />
      </StyledHighlightsContainer>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aut aperiam tempore, provident exercitationem animi recusandae ut quas
        enim temporibus, illo obcaecati dolorum sunt, aliquid laboriosam neque
        inventore. Ea adipisci voluptatem consequuntur magnam eius at eum et!
        Tenetur, porro! Laboriosam molestias commodi nesciunt veritatis
        similique asperiores placeat, reiciendis quia tempora autem a expedita
        voluptatibus quo, quis, in praesentium repellat deserunt nisi distinctio
        veniam quod. Ratione accusantium sed minima quaerat quam non nemo
        voluptatum corporis, odio similique provident fugit natus alias.
        Voluptas libero officiis tempore molestias excepturi ex voluptatibus
        magnam, consequatur dolore facere amet assumenda corporis repellendus
        minima sunt omnis voluptatem!
      </p>
      <h1>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aut aperiam tempore, provident exercitationem animi recusandae ut quas
        enim temporibus, illo obcaecati dolorum sunt, aliquid laboriosam neque
        inventore. Ea adipisci voluptatem consequuntur magnam eius at eum et!
        Tenetur, porro! Laboriosam molestias commodi nesciunt veritatis
        similique asperiores placeat, reiciendis quia tempora autem a expedita
        voluptatibus quo, quis, in praesentium repellat deserunt nisi distinctio
        veniam quod. Ratione accusantium sed minima quaerat quam non nemo
        voluptatum corporis, odio similique provident fugit natus alias.
        Voluptas libero officiis tempore molestias excepturi ex voluptatibus
        magnam, consequatur dolore facere amet assumenda corporis repellendus
        minima sunt omnis voluptatem!
      </p>
      <h1>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aut aperiam tempore, provident exercitationem animi recusandae ut quas
        enim temporibus, illo obcaecati dolorum sunt, aliquid laboriosam neque
        inventore. Ea adipisci voluptatem consequuntur magnam eius at eum et!
        Tenetur, porro! Laboriosam molestias commodi nesciunt veritatis
        similique asperiores placeat, reiciendis quia tempora autem a expedita
        voluptatibus quo, quis, in praesentium repellat deserunt nisi distinctio
        veniam quod. Ratione accusantium sed minima quaerat quam non nemo
        voluptatum corporis, odio similique provident fugit natus alias.
        Voluptas libero officiis tempore molestias excepturi ex voluptatibus
        magnam, consequatur dolore facere amet assumenda corporis repellendus
        minima sunt omnis voluptatem!
      </p>
    </>
  );
}

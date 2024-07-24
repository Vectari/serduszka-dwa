import styled from "styled-components";

const StyledTopPageInfo = styled.div`
  font-size: 2rem;
  font-family: "Roboto";
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 0 1rem 0;
  background-color: #d6200087;
`;

export function TopPageInfo({ info }) {
  return (
    <>
      <StyledTopPageInfo>{info}</StyledTopPageInfo>
    </>
  );
}

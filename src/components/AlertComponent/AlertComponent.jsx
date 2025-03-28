import styled from "styled-components";

const StyledAlertComponent = styled.div`
  color: black;
  background-color: #f72c2c;
  text-align: center;
  margin: -1rem;
  border-radius: 1rem;
`;

export function AlertComponent() {
  return (
    <StyledAlertComponent>
      <h3>23.05 - 30.05 - Lorem ipsum dolor sit amet.</h3>
    </StyledAlertComponent>
  );
}

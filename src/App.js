import styled from "styled-components";
import { theme } from "./theme/theme";
import NavBar from "./components/navbar/navbar";

const StyledDiv = styled.div`
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
`;

function App() {
  return (
    <>
      <StyledDiv>Hello</StyledDiv>
      <NavBar />
    </>
  );
}

export default App;

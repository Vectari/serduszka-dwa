import { createRoot } from "react-dom/client";
import { StyledBody } from "./main.styled";
import { Button } from "./components/Button/Button";

createRoot(document.getElementById("root")).render(
  <StyledBody>
    <p>test</p>
    <p>test branch deploy</p>
    <Button />
  </StyledBody>
);

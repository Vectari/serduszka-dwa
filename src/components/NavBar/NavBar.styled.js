import styled from "styled-components";

export const StyledNavBar = styled.div`
  margin: 10px auto;
  background-color: grey;
  border-radius: 20px;

  a {
    padding: 20px;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: pink;
  }

  .active {
    color: yellow;
  }
`;

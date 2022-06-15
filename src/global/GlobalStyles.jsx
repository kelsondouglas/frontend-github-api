//Importando desta maneira para que o prettier formate o GlobalStyle
import * as styled from "styled-components";

export default styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700&display=swap");

  :root {
    --body-bg: #30313a;
    --container-bg: #171821;
    --components-bg: #21222d;
    --primary-text-color: #fff;
    --secondary-text-color: #a0a0a0;
    --soft-blue: #a9dfd8;
    --soft-pink: #f2c8ed;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Mukta", sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea {
    background: transparent;
    border: none;
  }

  body {
    background: var(--body-bg);
    max-width: 40rem;
    height: 100vh;
    margin: 0 auto;
    color: var(--primary-text-color);

    @media screen and (min-width: 40rem) {
      max-width: 1020px;
    }
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --body-background: #1e253f;
        --text-color: #fff;
    }

    body {
        background: var(--body-background);
        max-width: 40rem;
        height: 100vh;
        margin: 0 auto;
        color: var(--text-color);
    }


`;

export default GlobalStyle;

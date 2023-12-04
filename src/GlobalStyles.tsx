import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    button {
        border: unset;
        background: unset;
    }
`;

export { GlobalStyle };

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100%;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

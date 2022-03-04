import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    }

    html {
        --bg: #fff;
        --second-bg: #f8f8f8;
        --icon: #90f;
        --primary: #0850ff;
        --btn: #ec275f;
        font-size: 62.5%;
    }
    
    @media (prefers-color-scheme: dark) {
        html {
            --bg: #021032;
            --second-bg: #00092B;
        }
    }

    svg {
        fill: var(--primary);
    }

    body {
        background: var(--bg);
    }
`;

export const theme = {
    color: {
        primary: ''
    }
}
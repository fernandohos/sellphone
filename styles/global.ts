import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        --bg: #fff;
        --second-bg: #f8f8f8;
        --icon: #90f;
        --primary: #0850ff;
    }
    
    @media (prefers-color-scheme: dark) {
        html {
            --bg: #021032;
            --second-bg: #f8f8f8;
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
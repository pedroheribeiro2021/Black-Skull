import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        text-decoration: none;
        list-style:none;
    }

    :root {
        --black1: #0B0B0B;

        --white: #FFFFFF;

        --gray1: #9A9A9A;
        --gray2: #CACACA;

        --dark1: #1C1C1E;
        --dark2: #2C2C2E;
        --dark3: #3A3A3C;

        --orange1: #FF9601;
        --orange2: #FFC470;
    }

    button {
        background-color: var(--orange1);
        color: var(--black1);
        font-weight: 700;
        cursor: pointer;
    }

    button:hover {
        color: var(--white);
        background-color: var(--dark1);
        transition: 0.8s;
    }

    input {
        background-color: var(--dark1);
        border-radius: 4px;
    }

    .arrow-btn {
        cursor: pointer;
    }

    .mix-titles {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 32px;
        font-style: italic;
        font-weight: 700;
        color: var(--white);

        span {
            font-family: 'Roboto Condensed', sans-serif;
            color: var(--orange1);
        }
    }

`

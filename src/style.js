import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      padding: 0;
      margin: 0;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`

export default GlobalStyle
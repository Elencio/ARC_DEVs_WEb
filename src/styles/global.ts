import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  }


  :focus {
    outline: none;
    box-shadow: 0 0 0 0.8px #0072C6;
  }

  body {
    background-color: #17191f;
  }
`
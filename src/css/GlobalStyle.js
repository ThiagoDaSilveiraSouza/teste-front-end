import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --header-height: 80px;
    --nunito:'Nunito', sans-serif;
    --lato: 'Lato', sans-serif;

    --responsive-size: 650px;
  }

  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .centralizer{
    max-width: 1248px;
    width: 90vw;
    margin: 0 auto;
  }

`

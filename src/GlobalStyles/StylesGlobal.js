import { createGlobalStyle } from "styled-components";
/*
font-family: 'Fira Code', monoespaçado;
família de fontes: 'Montserrat', sem serifa;
*/
export default createGlobalStyle`
    :root {
      --fonnt_fira: 'Fira Code', monoespaçado;
      --font_mont: 'Montserrat', sem serifa;

      /*colors*/
      --text_color: #EA80FC;
      --background_color: #F1F7F9;
      --background_scundary: #121212;
      --border_color: #FFD600;
    }
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
     
      font-smooth:antialiased;

    }
    html,body,#root {
      width: 100%;
      height: 100%;
      background-image: url('./Assets/fundo.svg')
      ::-webkit-scrollbar{
        display: none;
      }
    }

`;
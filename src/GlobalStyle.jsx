import { css } from "@emotion/react"

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --purple: #7e419c;
    --red: #d52029;
    --white: #fff;
    --black: #000;
    --lightgray: #eeeeee;
    --padding: clamp(1rem, 2vw, 2rem);
    --fontSans: "Work Sans", sans-serif;
  }
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: var(--fontSans);
  }
  button {
    background: transparent;
    color: inherit;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }
`

export default GlobalStyle

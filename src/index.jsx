import { Global } from "@emotion/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyle from "./GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>
)

import styled from "@emotion/styled"
import Features from "./Components/Features"
import Header from "./Components/Header"
import Main from "./Components/Main"

function App() {
  return (
    <StyledApp>
      <Header />
      <Main />
      <Features />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  //overflow: hidden;
  display: flex;
  flex-direction: column;
`

export default App

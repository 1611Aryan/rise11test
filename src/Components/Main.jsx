import styled from "@emotion/styled"
import Destinations from "./Destinations"
import MainHeading from "./MainHeading"
import Options from "./Options"

const Main = () => {
  return (
    <StyledMain>
      <Options />
      <MainHeading />
      <Destinations />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  width: 100%;

  height: 45vh;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    height: 52vh;
  }
`

export default Main

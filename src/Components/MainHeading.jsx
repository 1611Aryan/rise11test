import styled from "@emotion/styled"
import { FaChevronDown } from "react-icons/fa"

const MainHeading = () => {
  return (
    <StyledH1>
      Book from&nbsp;
      <span>
        San Francisco <FaChevronDown className="down" />
      </span>
      &nbsp;to
    </StyledH1>
  )
}

const StyledH1 = styled.h1`
  width: max-content;
  margin-bottom: 1rem;
  color: var(--black);
  font-weight: 300;
  font-size: clamp(1.25rem, 2vw, 2rem);

  span {
    color: var(--purple);
    font-weight: 600;
    cursor: pointer;
    .down {
      vertical-align: baseline;
      font-size: 0.6em;
    }
  }
`

export default MainHeading

import styled from "@emotion/styled"

const Destination = ({ location, more }) => {
  return (
    <StyledLi>
      <span className="location">{location}</span>
      <span className="more">{more}</span>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  justify-self: flex-start;
  height: 70px;
  aspect-ratio: 2.3/1;
  border: 2px solid #bbb;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  font-size: clamp(0.75rem, 1vw, 0.9rem);
  padding: calc(var(--padding) / 3);

  .location {
    color: var(--purple);
    font-weight: 500;
  }
  .more {
    font-size: 0.8em;
  }

  @media only screen and (max-width: 950px) {
    height: 90px;

    aspect-ratio: 2.5/1;
  }

  @media only screen and (max-width: 500px) {
    height: 60px;

    aspect-ratio: 2.3/1;
  }
`

export default Destination

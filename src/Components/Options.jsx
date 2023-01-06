import styled from "@emotion/styled"

const Options = () => {
  return (
    <StyledDiv>
      <div className="option">
        <input type="radio" name="type" id="roundTrip" value="roundTrip" />
        <label htmlFor="roundTrip">Round Trip</label>
      </div>
      <div className="option">
        <input type="radio" name="type" id="oneWay" value="oneWay" />
        <label htmlFor="oneWay">One Way</label>
      </div>
      <div className="option">
        <input type="radio" name="type" id="multiCity" value="multiCity" />
        <label htmlFor="multiCity">Multi City</label>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--padding);

  margin-bottom: 3%;
  padding: calc(var(--padding) / 2) calc(var(--padding) * 1.5);
  border-bottom: 2px solid #ccc;

  font-size: 0.85rem;
  .option {
    display: flex;
    align-items: center;
    cursor: pointer;
    label {
      margin-left: 5px;
    }
  }

  @media only screen and (max-width: 900px) {
    margin: 3% 0 8%;
  }
`

export default Options

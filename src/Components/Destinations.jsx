import styled from "@emotion/styled"
import Destination from "./Destination"

const Destinations = () => {
  const data = [
    {
      location: "LAS VEGAS",
      more: "NV (LAS)",
    },
    {
      location: "LOS ANGELES",
      more: "CA (LAX)",
    },
    {
      location: "NEW YORK CITY",
      more: "NY (NYC)",
    },
    {
      location: "PALM SPRINGS",
      more: "CA (PSP)",
    },
    {
      location: "PORTLAND",
      more: "OR (PDX)",
    },
    {
      location: "ALL CITIES",
      more: "",
    },
  ]

  return (
    <StyledUL>
      {data.map((d, i) => (
        <Destination key={i} location={d.location} more={d.more} />
      ))}
    </StyledUL>
  )
}

const StyledUL = styled.ul`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--padding);
  margin-bottom: 100%;
`

export default Destinations

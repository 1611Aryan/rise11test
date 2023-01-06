import styled from "@emotion/styled"

const Feature = ({ heading, img, link }) => {
  return (
    <StyledDiv>
      <span>{heading}</span>
      <img src={img} alt="" />
      <a href="/">{link}</a>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  font-size: clamp(0.7rem, 1vw, 1rem);
  max-width: 40%;
  text-align: center;
  img {
    height: 80%;
    object-fit: cover;
  }
  a {
    text-decoration: underline;
    text-transform: capitalize;
  }

  @media only screen and (max-width: 900px) {
    img {
      height: 60%;
    }
  }
`
export default Feature

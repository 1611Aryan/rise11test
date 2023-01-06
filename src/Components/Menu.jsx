import styled from "@emotion/styled"
import { FaTimes } from "react-icons/fa"

const Menu = ({ setMenu }) => {
  const close = () => setMenu(false)

  return (
    <StyledAside>
      <FaTimes className="close" onClick={close} />
      <nav>
        <a href="/">Book</a>
        <a href="/">Check In</a>
        <a href="/">Manage</a>
        <a href="/">Deals</a>
        <a href="/">Flying With Us</a>
        <a href="/">Where We Fly</a>
        <a href="/">Shop</a>
        <a href="/">FAQ</a>
        <a href="/">Fees</a>
        <button>Sign Up</button>
      </nav>
    </StyledAside>
  )
}

const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 9;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background: linear-gradient(to right, var(--purple), var(--red));

  font-size: 3rem;

  .close {
    align-self: flex-end;
    cursor: pointer;
  }

  nav {
    width: 100%;
    height: auto;
    color: var(--white);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    > * {
      display: block;
      width: max-content;
      padding: var(--padding) 0;
      & + * {
        border-top: 1px solid var(--white);
      }
    }

    button {
      align-self: flex-end;
      font-size: 0.6em;
      border-radius: 5px;
      background: var(--white);
      color: var(--purple);
      padding: var(--padding);
    }
  }

  @media only screen and (max-width: 500px) {
    font-size: clamp(1.5rem, 3vw, 3rem);

    nav {
      button {
        align-self: flex-start;
      }
    }
  }
`

export default Menu

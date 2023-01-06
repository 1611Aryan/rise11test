import styled from "@emotion/styled"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import logo from "./../media/logo.png"
import Menu from "./Menu"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const show = () => setMenu(true)

  return (
    <StyledHeader>
      <div className="menuLeft" onClick={show}>
        <BiMenu />
      </div>
      <img src={logo} alt="" />
      <ul className="actions">
        <li>BOOK</li>
        <li>CHECK IN</li>
        <li>MANAGE</li>
      </ul>
      <nav className="nav">
        <a href="/">Deals</a>
        <a href="/">Flying With Us</a>
        <a href="/">Where We Fly</a>
        <a href="/">Shop</a>
        <a href="/">FAQ</a>
        <a href="/">Fees</a>
      </nav>
      <div className="buttons">
        <span className="elevate">elevate</span>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      <div className="menuRight" onClick={show}>
        <BiMenu />
      </div>
      {menu && <Menu setMenu={setMenu} />}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 9vh;
  background: linear-gradient(to right, var(--purple), var(--red));

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--white);

  > * {
    height: 100%;
    padding: calc(var(--padding) / 2) var(--padding);

    display: flex;
    align-items: center;

    gap: calc(var(--padding) / 2);

    font-size: clamp(0.75rem, 1vw, 0.9rem);
    line-height: 1;

    & + * {
      border-left: 1px solid #0008;
    }
  }

  .menuRight,
  .menuLeft {
    display: none;
    font-size: 1.5em;
  }

  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }

  .actions {
    font-weight: 500;
    li {
      transition: all 200ms ease;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        color: yellow;
      }
    }
  }
  .nav {
    flex: 1;
    font-size: 0.8em;
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -1px;
        left: 0;
        background-color: var(--white);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
  .buttons {
    .elevate {
      font-weight: 200;
      font-size: 1.5em;
      cursor: pointer;
    }
    > * {
      transition: transform ease 200ms;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  @media only screen and (max-width: 950px) {
    height: 8vh;
    img {
      max-width: 30%;
      object-fit: contain;
    }
    .nav {
      display: none;
    }
    .buttons {
      .elevate {
        display: none;
      }
    }
    .menuRight {
      display: flex;
    }
  }

  @media only screen and (max-width: 500px) {
    > * {
      gap: calc(var(--padding) / 4);
      border: 0;
    }
    .actions {
      display: none;
    }
    .menuRight {
      display: none;
    }
    .buttons {
      button:nth-of-type(2) {
        display: none;
      }
    }
    .menuLeft {
      display: flex;
    }
  }
`
export default Header

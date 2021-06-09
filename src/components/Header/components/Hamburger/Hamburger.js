import styled from "styled-components"

const HamburgerElement = styled.label`
  flex: 0 0 22.5px;
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;

  height: 22.5px;

  cursor: pointer;
  input {
    display: none;
    :checked {
      ~ span {
        transform: rotate(45deg);
        :before,
        :after {
          top: 0;
          transform: rotate(-90deg);
        }
      }
    }
  }
  span {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 2.5px;
    border-radius: 5px;
    background: black;
    transition: transform 0.3s;
    :before,
    :after {
      position: absolute;
      content: " ";
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: black;
      transition: top 0.3s, transform 0.3s;
    }
    :before {
      top: 4px;
    }
    :after {
      top: -4px;
    }
  }

  @media(max-width: 650px){
    display: flex;
  }
`

export const Hamburger = () => {
  return (
    <HamburgerElement>
      <input type='checkbox' />
      <span></span>
    </HamburgerElement>
  )
}

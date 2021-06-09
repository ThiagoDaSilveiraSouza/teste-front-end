import Logo from "../../logo.svg"
import Cart from "./img/cart.svg"
import Person from "./img/person.svg"
import styled from "styled-components"

// context
import { useCart } from "../../context"
// Header components
import { Form, Hamburger } from "./components"

const HeaderElement = styled.header`
  position: relative;
  display: flex;
  justify-content: center;

  height: var(--header-height);

  font-family: var(--nunito);
  z-index: 1000;

  > div {
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: var(--header-height);
    background: white;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 650px) {
    padding-bottom: 10px;
  }
`
const LogoContainer = styled.div`
  flex: 1 1 auto;
  img {
    width: 100%;
    max-width: 170.14px;
    min-width: 102.46px;
  }
`

const MyAccount = styled.a`
  display: flex;
  align-items: center;

  gap: 6.5px;
  span {
    text-transform: capitalize;
    font-size: 13px;
    white-space: nowrap;
  }
  @media (max-width: 650px) {
    display: none;
  }
`

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 14px;
    height: 14px;

    border-radius: 100%;
    background: #f8475f;
    font-size: 10px;
    color: white;
  }
`

export const Header = () => {
  const { cart } = useCart()
  return (
    <HeaderElement>
      <div>
        <div className='centralizer'>
          <Hamburger />
          <LogoContainer>
            <img src={Logo} alt='Corebiz' />
          </LogoContainer>
          <Form />
          <MyAccount>
            <img src={Person} alt='' />
            <span>Minha conta</span>
          </MyAccount>
          <CartContainer>
            <img src={Cart} alt='cart' />
            <span>{cart?.length ? cart.length : "0"}</span>
          </CartContainer>
        </div>
      </div>
    </HeaderElement>
  )
}

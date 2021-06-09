import styled from "styled-components"
import EmailImg from "./img/email.svg"
import PhoneImg from "./img/phone.svg"
import Corebiz from "./img/corebiz.svg"
import Vtex from "./img/vtex.svg"

const FooterComponent = styled.footer`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 213px;
  padding: 25px 0 30px 0;

  background: black;
  font-family: var(--nunito);
  .centralizer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px 20px;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`
const Localization = styled.div`
  color: white;

  h3 {
    margin: 0;
  }

  hr {
    width: 44px;
    height: 6px;
    margin: 16px 0 20px 0;
    border: none;

    background: white;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      margin: 0;
      font-size: 13px;
    }
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  font-family: var(--nunito);
  button {
    display: flex;
    align-items: center;
    gap: 18px;
    width: 195px;
    height: 38px;
    padding-left: 18px;

    border: none;
    border-radius: 5px;
    outline: none;

    font-size: 12px;
    text-transform: uppercase;

    transition: transform 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }

    span {
      text-align: left;
    }
  }
`
const Partners = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

export const Footer = () => {
  return (
    <FooterComponent>
      <div className='centralizer'>
        <Localization>
          <h3>Localização</h3>
          <hr />
          <div>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </div>
        </Localization>
        <Contact>
          <button>
            <img src={EmailImg} alt='Entre em contato' />
            <span>Entre em contato</span>
          </button>
          <button>
            <img src={PhoneImg} alt='Fale com nosso consultor' />
            <span>Fale com nosso consultor oline</span>
          </button>
        </Contact>
        <Partners>
          <img src={Corebiz} alt='Create by Corebiz' />
          <img src={Vtex} alt='Powered by Vtex' />
        </Partners>
      </div>
    </FooterComponent>
  )
}

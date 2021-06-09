import styled from "styled-components"
import starEmpty from "./img/star-empty.svg"
import starFull from "./img/star-full.svg"

// context
import { useCart } from "../../../../../../context"

const ProdCardComponent = styled.div`
  flex: 0 0 216px;
  width: 100%;

  @media (max-width: 650px) {
    flex: 0 0 140px;
    width: 140px;
  }
  .display {
    position: relative;
    height: fit-content;
    img {
      width: 100%;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 153px;
    padding: 7px;

    background: #e6e8ea;
    h4 {
      margin: 0;

      text-transform: uppercase;
      color: #7a7a7a;
      font-size: 12px;
      text-align: center;
      @media (max-width: 650px) {
        font-size: 10px;
      }
    }
  }
`
const OffAlert = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  width: 81px;
  height: 72px;
  padding: 6px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 650px) {
    width: 50px;
    height: 45px;
    padding: 3px;
  }

  strong {
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    z-index: 5;
    @media (max-width: 650px) {
      font-size: 10px;
    }
  }

  :before {
    content: "";
    position: absolute;
    top: -45%;
    right: -45%;

    width: 100%;
    height: 100%;

    transform: rotate(45deg);
    background: #f8475f;
    z-index: 0;
  }
`
const RateContent = styled.div`
  display: flex;
  gap: 2.6px;

  margin: auto 0 10px 0;
`
const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 8px;
  h3 {
    font-size: 18px;
    margin: 0;
    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
  h4 {
    height: 17px;
    font-size: 14px;
    text-transform: lowercase !important;
    @media (max-width: 650px) {
      font-size: 11px;
    }
    span {
      text-transform: uppercase;
      text-decoration: line-through;
    }
  }
  p {
    margin: 0;
    color: #7a7a7a;
    font-size: 15px;
    @media (max-width: 650px) {
      font-size: 11px;
    }
  }
`
const Button = styled.button`
  width: 125px;
  height: 32px;

  border: none;
  border-radius: 5px;
  outline: none;

  background: black;
  color: white;

  transition: transform 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`
export const ProdCard = ({ currentProd }) => {
  const {
    productName,
    imageUrl,
    price,
    installments,
    stars,
    listPrice,
    storage = true,
  } = currentProd

  const { cart, setCart } = useCart()
  const addCurrentProdToCart = () => {
    setCart([...cart, currentProd])
  }
  const convertPriceToBRL = (price) =>
    (price / 100).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })

  return (
    <ProdCardComponent>
      <div className='display'>
        <OffAlert style={{ display: storage ? "" : "none" }}>
          <strong>Off</strong>
        </OffAlert>
        <img src={imageUrl} alt='' />
      </div>
      <div className='description'>
        <h4>{productName}</h4>
        <RateContent>
          {Array(5)
            .fill("")
            .map((currentStar, index) => (
              <img
                key={index}
                src={index <= stars ? starFull : starEmpty}
                alt='estrela'
              />
            ))}
        </RateContent>
        <PriceContent>
          {listPrice ? (
            <h4>
              de <span>{convertPriceToBRL(listPrice)}</span>
            </h4>
          ) : (
            <h4>{""}</h4>
          )}
          <h3>por {convertPriceToBRL(price)}</h3>
          {installments?.map((currentInstallment, index) => (
            <p key='index'>
              ou em {currentInstallment.quantity}x de{" "}
              {convertPriceToBRL(currentInstallment.value)}{" "}
            </p>
          ))}
        </PriceContent>
        <Button onClick={addCurrentProdToCart}>Comprar</Button>
      </div>
    </ProdCardComponent>
  )
}

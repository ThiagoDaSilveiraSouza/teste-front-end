import styled from "styled-components"

// ProdContainer component
import { ProdCard } from "./components"

const ProdContainerComponent = styled.div`
  width: 100%;
  padding: 20px 0 70px 0;

  box-sizing: border-box;

  > .centralizer {
    overflow: hidden;
    > div {
      display: flex;
      gap: 30px;
      @media (max-width: 650px) {
        gap: 50px 20px;
      }
    }
  }
`

export const ProdContainer = ({ prodList = [] }) => {
  return (
    <ProdContainerComponent>
      <div className='centralizer'>
        <div>
          {prodList.map((currentProd) => (
            <ProdCard key={currentProd.productId} currentProd={currentProd} />
          ))}
        </div>
      </div>
    </ProdContainerComponent>
  )
}

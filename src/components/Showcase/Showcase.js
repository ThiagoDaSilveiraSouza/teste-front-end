import { useEffect, useState, useCallback } from "react"
import styled from "styled-components"

// api
import { getProducts } from "../../api"

// Showcase components
import { ProdContainer } from "./components"

const ShowcaseComponent = styled.section`
  font-family: var(--nunito);
  padding-top: 25px;
`
const Title = styled.div`
  > h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    width: fit-content;
    font-weight: 900;

    font-size: 20px;
    > hr {
      height: 4px;
      width: 65px;

      margin: 0;
      border: none;
      background: #c0c0c0;
    }
  }
`

export const Showcase = () => {
  const [prodList, setProdList] = useState([])

  const products = useCallback(
    () => getProducts().then((prodList) => setProdList(prodList)),
    [setProdList]
  )
  useEffect(() => {
    products()
  }, [products])

  return (
    <ShowcaseComponent>
      <Title className='centralizer'>
        <h2>
          Mais vendidos
          <hr />
        </h2>
      </Title>
      <ProdContainer prodList={prodList} />
    </ShowcaseComponent>
  )
}

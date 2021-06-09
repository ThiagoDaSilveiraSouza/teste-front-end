import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react"

const CartContextComponent = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const getCartOfLocalStorage = useCallback(() => {
    const storageCart = localStorage.getItem("cart")
    const jsonCart = JSON.parse(storageCart)
    jsonCart?.length && setCart(jsonCart)
  }, [])

  useEffect(() => {
    getCartOfLocalStorage()
  }, [getCartOfLocalStorage])

  const saveCartOnLocalStorage = useCallback(() => {
    cart.length && localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    saveCartOnLocalStorage()
  }, [saveCartOnLocalStorage])
  return (
    <CartContextComponent.Provider value={{ cart, setCart }}>
      {children}
    </CartContextComponent.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContextComponent)
  return { ...context }
}

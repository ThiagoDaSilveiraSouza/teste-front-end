// GlobalStyle
import { GlobalStyle } from "./css/GlobalStyle.js"

// context
import { CartContextProvider } from "./context"

// components
import { Header, Banner, Showcase, NewsLetter, Footer } from "./components"

function App() {
  return (
    <CartContextProvider>
      <GlobalStyle />
      <section className='app'>
        <Header />
        <Banner />
        <Showcase />
        <NewsLetter />
        <Footer />
      </section>
    </CartContextProvider>
  )
}

export default App

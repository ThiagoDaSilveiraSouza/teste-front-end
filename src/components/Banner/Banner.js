import styled from "styled-components"

import Img1 from "./img/banner1.png"
import Img2 from "./img/banner2.png"

const BannerComponent = styled.section`
  width: 100%;
  img {
    width: 100%;
  }
`
export const Banner = () => {
  // const [carouselCardPosition, setCarouselCardPosition] = useState(0)

  return (
    <BannerComponent>
      <picture>
        <source media='(min-width: 651px)' srcSet={Img1} />
        <source media='(max-width: 650px)' srcSet={Img2} />
        <img src={Img1} alt='banner'></img>
      </picture>
    </BannerComponent>
  )
}

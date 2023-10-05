import { useProduct } from "./ProductDetail"
import advantagesData from "../../AdvantagesData"

const Vyhody = () => {
  const product = useProduct()

  const advantagesInfo = advantagesData.find((advantage) => {
    return advantage.id === product.id 
  })
  return (
    <article className="max-w-xl">
      <ul>
        <li dangerouslySetInnerHTML={{ __html: advantagesInfo.adv1 }}  />
        <li dangerouslySetInnerHTML={{ __html: advantagesInfo.adv2 }} ></li>
        <li dangerouslySetInnerHTML={{ __html: advantagesInfo.adv3 }} ></li>
        <li dangerouslySetInnerHTML={{ __html: advantagesInfo.adv4 }} ></li>
        <li dangerouslySetInnerHTML={{ __html: advantagesInfo.adv5 }} ></li>
      </ul>
    </article>
  )
}

export default Vyhody

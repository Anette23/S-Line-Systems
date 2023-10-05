import { useProduct } from "./ProductDetail";
import moreInfoData from "../../MoreInfoData";

const Info = () => {
  const product = useProduct();

  if(!product) return <p>No additional information available for this product...</p>

  const productMoreInfo = moreInfoData.find((info) => {
   return info.id === product.id
  })

  return (
    <article className="max-w-xl">
    <p>{productMoreInfo.info1}</p>
    <p>{productMoreInfo.info2}</p>
    </article>
  )
}

export default Info
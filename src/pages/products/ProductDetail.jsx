import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productDetailData from "../../ProductsDetailData";
import BackButton from "../../components/buttons/BackButton";
import { createContext, useContext } from "react";
import ProductNavigation from "../../components/ProductNavigation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProduct must be used within a ProductProvider");
  return context;
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const findProduct = productDetailData.find((product) => product.id === id);
    setProduct(findProduct || null);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className="pt-24 md:pt-32 lg:pt-28  ">
        <ProductContext.Provider value={product}>
          <BackButton />

          <div className="my-8 lg:grid lg:grid-cols-2">
          <LazyLoadImage
              src={product.image} width={600} height={400} 
              className="rounded-lg"
              alt={`image of ${product.name}`}
              loading="lazy"
            />

            <div>
              <h2 className="text-accent text-2xl my-4">{product.name}</h2>
              <p className="mb-4">{product.description}</p>
              <ProductNavigation productId={id} />
            </div>
          </div>
          <Outlet />
        </ProductContext.Provider>
      </section>
    </>
  );
};

export default ProductDetail;

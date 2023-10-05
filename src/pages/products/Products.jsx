import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreInfoButton from "../../components/buttons/MoreInfoButton";
import productPreviews from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productPreviews);
  }, []);

  const productElement = products.map((product) => (
    <article key={product.id} className="product-card ">
      <Link to={`/products/${product.id}`}>
      <LazyLoadImage src={product.image}  className="mb-2 xl:max-w-[260px] rounded-xl" alt={`image of ${product.name}`} loading="lazy" />
        <h2 className="my-4 ">{product.name}</h2>
        <MoreInfoButton />
      </Link>
    </article>
  ));

  return (
    <>
      <section id="products">
        <h1 className="mb-10 text-center pt-20  text-text">
         Produkty a služby</h1>
        <div className="products-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productElement}
        </div>
      </section>
    </>
  );
};

export default Products;

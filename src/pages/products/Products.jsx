import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreInfoButton from "../../components/buttons/MoreInfoButton";
import productPreviews from "../../data";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productPreviews);
  }, []);

  const productElement = products.map((product) => (
    <article key={product.id} className="product-card ">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          width={400}
          height={400}
          className="animate-img mb-2 rounded-xl"
          alt={`image of ${product.name}`}
          loading="lazy"
        />
        <h2 className="my-4 ">{product.name}</h2>
        <MoreInfoButton />
      </Link>
    </article>
  ));

  return (
    <>
      <section id="products" className="md:pt-32 lg:pt-28 ">
        <h1 className="mb-10 text-center text-text">Produkty a služby</h1>
        <div className="products-list grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productElement}
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#90043a"
          fillOpacity="1"
          d="M0,32L48,26.7C96,21,192,11,288,48C384,85,480,171,576,181.3C672,192,768,128,864,106.7C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Products;

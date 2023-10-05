import { useOutletContext } from "react-router-dom";

const References = () => {
  const { product } = useOutletContext();

  return (
    <>
    <div>
      <img src={product.referencies} ></img>

    </div>
    </>
  );
};

export default References;

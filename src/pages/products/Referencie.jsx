import { useOutletContext } from "react-router-dom";

const Referencie = () => {
  const { product } = useOutletContext();

  return (
    <>
    <div>
      <img src={product.referencies} ></img>

    </div>
    </>
  );
};

export default Referencie;

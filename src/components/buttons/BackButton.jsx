import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to=".."
      relative="path"
      className="back-button bg-secondary text-text rounded-full py-2 px-4"
    >
      &larr; Späť na všetky produkty
    </Link>
  );
};

export default BackButton;

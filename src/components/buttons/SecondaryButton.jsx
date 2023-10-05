import { Link} from "react-router-dom";

const SecondaryButton = () => {
  return (
    <Link to="/contact" className="contact-btn px-4 py-2 text-text bg-secondary border-secondary focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-500 ease-in-out outline-0 rounded-full">
      Cenová ponuka
    </Link>
    )
};

export default SecondaryButton;

// 
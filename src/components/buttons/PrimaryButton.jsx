import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi2";

const PrimaryButton = () => {
  return (
      <Link to="/contact" className="contact-btn text-text bg-primary focus:ring-4 focus:outline-none focus:ring-pink-200 text-center inline-flex gap-2  items-center justify-around  px-4 py-2.5 border-0 outline-0 rounded-full">
        Dohodnúť konzultáciu 
      <HiOutlinePhone className="animate-bounce text-xl"/>
      </Link>
    
  );
};

export default PrimaryButton;

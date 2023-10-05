import { FaArrowCircleDown } from "react-icons/fa";

const MoreInfoButton = () => {
  return (
    <button className="flex items-center gap-2 rounded-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Prečítať viac
      <FaArrowCircleDown className="animate-bounce" />
    </button>
  );
};

export default MoreInfoButton;

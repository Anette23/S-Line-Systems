import { Link } from "react-router-dom";
import logo from "../assets/img/sline_logo.webp";
import Navigation from "../components/navigation/Navigation";

const Header2 = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap fixed top-0 left-0 z-50 w-full text-sm bg-black opacity-90 ">
      <nav
        className="relative w-full max-container p-6 md:flex md:items-center md:justify-between md:py-6 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <aside className="logo">
            <Link to="/">
              <img
                src={logo}
                className="w-40 bg-white p-2 rounded-sm"
                alt="Logo S-Line Systems"
              />
            </Link>
          </aside>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium align-middle bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1  focus:ring-blue-400 transition-all text-sm  hover:bg-slate-800 border-gray-700 text-gray-900 hover:text-white focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-5 h-5"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-5 h-5"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        
        <Navigation />
      </nav>
    </header>
  );
};

export default Header2;

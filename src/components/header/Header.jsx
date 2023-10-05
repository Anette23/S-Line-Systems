import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import logo from "../../assets/img/sline_log.png";
const Header = () => {
  return (
    <>
      <header className="max-container flex justify-between items-center w-full z-10">
        <aside className="logo">
          <Link to="/">
            <img src={logo} className="w-40 bg-white p-2 rounded-sm" alt="Logo S-Line Systems" loading="lazy" />
          </Link>
        </aside>
        <Navigation />
      </header>
    </>
  );
};

export default Header;

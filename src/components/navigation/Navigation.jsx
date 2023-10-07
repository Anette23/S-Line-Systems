import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import productPreviews from "../../data";
const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const showNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const mobileNavClass = `h-full w-full fixed top-[65px] flex flex-col justify-around items-center lg:hidden bg-white z-40 duration-1000 ${
    nav ? "right-0" : "right-full"
  }`;

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "white",
  };

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="space-x-4">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Hlavná stránka
          </NavLink>

          <ul
            className="dropdown inline-block"
            
          >
            <li onClick={toggleDropdown} className="text-text cursor-pointer">Produkty a služby</li>
            {isDropdownVisible && (
              <ul className="dropdown-menu absolute left-100 mt-2 space-y-2 bg-secondary border rounded shadow-lg">
                {productPreviews.map((product) => (
                  <li key={product.id} className="cursor-pointer">
                    <Link to={`/products/${product.id}`} onClick={() => setIsDropdownVisible(false)} className="block px-4 py-2 hover:text-gray-600 hover:bg-text">{product.name} </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
          <NavLink
            to={{ pathname: "instructions", hash: "#instructions" }}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Ako postupovať?
          </NavLink>
          <NavLink
            to={"references"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Referencie
          </NavLink>
          <NavLink
            to={{ pathname: "about", hash: "#about" }}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            O nás
          </NavLink>

          <NavLink
            to={"contact"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Kontakt
          </NavLink>
        </ul>
      </nav>

      {nav ? (
        <button className="lg:hidden text-xl fixed right-8 z-50">
          <FaX aria-hidden="true" onClick={() => showNav()} />
        </button>
      ) : (
        <button className="lg:hidden text-xl fixed right-8">
          <FaBars onClick={() => showNav()} aria-hidden="true" />
        </button>
      )}

      <nav className={mobileNavClass}>
        <Link to="/" onClick={closeNav}>
          Hlavná stránka
        </Link>
        <Link to="/products#products" onClick={closeNav}>
          Produkty a služby
        </Link>
        <NavLink to="/instructions" onClick={closeNav}>
          Ako postupovať?
        </NavLink>
        <NavLink to="/about#about" onClick={closeNav}>
          O nás
        </NavLink>
        <NavLink to="/references#references" onClick={closeNav}>
          Referencie
        </NavLink>

        <NavLink to="/contact" onClick={closeNav}>
          Kontakt
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;

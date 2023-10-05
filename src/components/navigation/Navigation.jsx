import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const Navigation = () => {
  const [nav, setNav] = useState(false);

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
          <NavLink
            to={{ pathname: "products", hash: "#products" }}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Produkty a služby
          </NavLink>
          <NavLink
            to={{ pathname: "instructiones", hash: "#instructiones" }}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Ako postupovať?
          </NavLink>
          <NavLink
            to={"referencie"}
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
        <NavLink to="/about#about" onClick={closeNav}>
          O nás
        </NavLink>
        <NavLink to="/referencie#referencie" onClick={closeNav}>
          Referencie
        </NavLink>
        <NavLink to="/reviews#reviews" onClick={closeNav}>
          Recenzie
        </NavLink>
        <NavLink to="/contact" onClick={closeNav}>
          Kontakt
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;

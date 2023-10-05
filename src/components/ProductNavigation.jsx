import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ProductNavigation = ({ productId }) => {
  const activeStyle = {
    textDecoration: "underline",
    color: "white",
  };
  return (
    <nav className=" flex gap-4 text-xl mb-8 font-semibold">
      <li>
        <NavLink
          to={`/products/${productId}/vyhody`}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Výhody
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/products/${productId}/info`}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Viac info
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/products/${productId}/referencie`} style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Referencie
        </NavLink>
      </li>
    </nav>
  );
};

export default ProductNavigation;

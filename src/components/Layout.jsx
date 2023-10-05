import { Outlet } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Header2 />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;

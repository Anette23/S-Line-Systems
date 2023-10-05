import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";
import("preline");
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ProductDetail from "./pages/products/ProductDetail";

// const ProductDetail = lazy(() => import("./pages/products/ProductDetail"));
<LazyLoadComponent>
      <ProductDetail />
    </LazyLoadComponent>
const Vyhody = lazy(() => import("./pages/products/Vyhody"));
const Info = lazy(() => import("./pages/products/Info"));
const Instructions = lazy(() => import("./pages/Instructions"));
const References = lazy(() => import("./pages/References"));
const Reviews = lazy(() => import("./pages/Reviews"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
import Loading from "./components/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="products">
          <Route path="products" element={<Products />}/>

          <Route path=":id" element={
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        }>
        <Route path="vyhody" element={
          <Suspense fallback={<Loading />}>
            <Vyhody />
          </Suspense>
        } />
        <Route path="info" element={
          <Suspense fallback={<Loading />}>
            <Info />
          </Suspense>
        } />
        <Route path="referencie" element={
          <Suspense fallback={<Loading />}>
            <References />
          </Suspense>
        } />
      </Route>
        </Route>

        <Route path="instructions" element={
          <Suspense fallback={<Loading />}>
            <Instructions />
          </Suspense>
        } />
        <Route path="referencie" element={
          <Suspense fallback={<Loading />}>
            <References />
          </Suspense>
        } />
        <Route path="reviews" element={
          <Suspense fallback={<Loading />}>
            <Reviews />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        } />
      </Route>
    </Routes>
  </BrowserRouter>
);

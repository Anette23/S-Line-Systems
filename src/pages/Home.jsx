import AboutPreview from "../components/AboutPreview";
import HeroSection3 from "../components/heroSection/HeroSection3";
import ReviewsPreview from "../components/ReviewsPreview";
import Products from "./products/Products";

const Home = () => {
  return (
    <>
      <main className="pt-24 md:pt-32 lg:pt-28 max-container">

        <HeroSection3 />
        <Products />
        <AboutPreview />
        <ReviewsPreview />
      </main>
    </>
  );
};

export default Home;

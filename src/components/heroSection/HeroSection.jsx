import { HiChevronDoubleDown } from "react-icons/hi2";
import ContactButton from "../ContactButton";

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center  aspect-auto min-h-[60vh] lg:min-h-screen grid place-items-center">
      <div className="hero-content mt-4 text-white text-center">
        <p className="heading font-alegreya tracking-[4px] font-semibold mb-6">
          <span className="heating   text-heatingColor"> Kúrenie</span> a
          <span className="cooling   text-coolingColor"> chladenie</span> pre
          Váš domov
        </p>
        {/* <h1 className="heading font-heading mb-6">
          Získajte kvalitu a komfort, ktorý si zaslúžite
        </h1> */}
        <ContactButton />
        <div className="animate-bounce flex justify-center">
          <a href="#products" className="text-5xl text-white animate-bounce">
            <HiChevronDoubleDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

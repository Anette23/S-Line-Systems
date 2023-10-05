import PrimaryButton from "../buttons/PrimaryButton";
import heroImage from "../../assets/img/banner.webp";
import { HiChevronDoubleDown } from "react-icons/hi2";
import SecondaryButton from "../buttons/SecondaryButton";
import { LazyLoadImage } from "react-lazy-load-image-component";


const HeroSection2 = () => {
  return (
    <>
      <section className="hero">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 ">
          <article className="text-center lg:text-left">
            <h1 className="heroHeading text-text"><span className="heroHeading colorEffect font-extrabold">Kúrenie</span> a  
            <span className="heroHeading colorEffect font-extrabold"> chladenie</span> pre Váš domov</h1>

            <aside className="my-6 md:my-10 flex flex-col flex-wrap items-center gap-6 w-full lg:flex-row lg:items-start">
              <PrimaryButton />
              <SecondaryButton />
            </aside>

            <aside className="hidden md:grid md:grid-cols-2 md:gap-4 md:mt-6">
              <div>
                <p className="font-bold text-lg">12 rokov+</p>
                <p className="text-base">skúseností</p>
              </div>

              <div>
                <p className="font-bold text-lg">500+</p>
                <p className="text-base">zrealizovaných návrhov</p>
              </div>

              <div>
                <p className="font-bold text-lg">200+</p>
                <p className="text-base">servisovaných domácností</p>
              </div>

              <div>
                <p className="font-bold text-lg">3+</p>
                <p className="text-base">patentované produkty</p>
              </div>
            </aside>
          </article>
          <article className=" mt-10 lg:mt-0 lg:grid lg:items-center">
          <LazyLoadImage
              className="w-full rounded-xl"
              src={heroImage}
              width={600} height={400}
              alt="image of happy family "
              loading="lazy"
            />
          </article>
          <div className="animate-bounce flex justify-center mt-8 lg:hidden">
            <a href="#products" className="text-5xl text-white ">
              <HiChevronDoubleDown />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection2;

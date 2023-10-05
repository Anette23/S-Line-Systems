import Team from "../components/Team";
import team from "../assets/img/team.webp";
import FAQ from "../components/FAQ";
import Reviews from "./Reviews";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const About = () => {
  return (
    <>
     <section className="pt-24 md:pt-32 lg:pt-28" id="about">
        <h1 className="text-text text-center mb-10">S-Line Systems</h1>
        <aside className="grid grid-cols-1 lg:grid-cols-2 py-6">
          <article>
            <ul className="about-list my-10 ml-6">
              <h3 className="font-extrabold">Máme:</h3>
              <li>Viac ako 12 rokov skúseností</li>
              <li>500+ zrealizovaných návrhov</li>
              <li> 200+ servisovaných domácností</li>
              <li>3 patentované produkty</li>
              <li>9-členný realizačný tím</li>
              <li>2 revízni technici</li>
              <li> 3 dozorujúci technici</li>
              <li>8+ oprávnení na činnosť TZB</li>
              <li>7+ stálych odberateľov</li>
              <li>1 podporovaná nezisková organizácia</li>
            </ul>

            
          </article>

          <article className="grid grid-cols-3 grid-rows-3 gap-4">
          <LazyLoadImage
              src={team}
              alt=""
              loading="lazy"
              className="col-span-2 row-span-2"
            />
            <LazyLoadImage src={team} effect="blur" alt="" loading="lazy" width={600} height={400}/>
            <LazyLoadImage src={team} width={600} height={400} alt="" loading="lazy" />
            <LazyLoadImage src={team} width={600} height={400} alt="" loading="lazy" />
            <LazyLoadImage src={team} width={600} height={400} alt="" loading="lazy" />
            <LazyLoadImage src={team} width={600} height={400} alt="" loading="lazy" />
          </article>
        </aside>

        <article className="faq">
          <FAQ />
        </article>

        <Reviews />

        <Team />
      </section>
    </>
  );
};

export default About;

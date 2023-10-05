import team from "../assets/img/team.webp";
import FAQ from "../components/FAQ";
import MoreInfoButton from "./buttons/MoreInfoButton";
import PrimaryButton from "./buttons/PrimaryButton";
const AboutPreview = () => {
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

            <div>
              <MoreInfoButton />
              <PrimaryButton />
            </div>
          </article>

          <article className="grid grid-cols-3 grid-rows-3 gap-4">
            <img
              src={team}
              alt=""
              loading="lazy"
              className="col-span-2 row-span-2"
            />
            <img src={team} alt="" loading="lazy" />
            <img src={team} alt="" loading="lazy" />
            <img src={team} alt="" loading="lazy" />
            <img src={team} alt="" loading="lazy" />
            <img src={team} alt="" loading="lazy" />
          </article>
        </aside>

        <article className="faq">
          <FAQ />
        </article>
      </section>
    </>
  );
};

export default AboutPreview;

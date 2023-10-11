import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import skill from "../../assets/img/3D icons/skill.png" 
import design from "../../assets/img/3D icons/design.png" 
import service from "../../assets/img/3D icons/service.png" 
import diploma from "../../assets/img/3D icons/diploma.png"
import  podlahoveKurenie from '../../assets/img/produkty/podlahoveKurenie.webp'
import  fotovoltaika from '../../assets/img/produkty/fotovoltaika.webp'
import  klima from '../../assets/img/produkty/klima.webp'
import  kotle from '../../assets/img/produkty/kondenzacneKotle.webp'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroSection3 = () => {
  return (
    <section className="hero min-h-screen p-10 lg:py-[4.3rem]">
      <div className="grid lg:grid-cols-2 lg:gap-12">
        <aside className="">
          <article>
            <h1 className="">
              Profesionálne Riešenia Pre <span className="heading-span colorEffect">Kúrenie</span>  a <span className="heading-span colorEffect">Chladenie</span>
            </h1>
            <p className="mt-4 mb-10 lg:text-xl ">
              Spoľahlivá inštalácia, servis a údržba pre váš komfort.
            </p>
          </article>
          <article className="mb-12 flex gap-10">
            <PrimaryButton />
            <SecondaryButton />
          </article>

          <article className="flex mb-12 gap-2">
            <div>
              <img src={podlahoveKurenie} alt="" width={120} height={120} className="ease-in duration-700 hover:scale-300" />
            </div>
             <div>
              <img src={klima} alt="" width={120} height={120} className="ease-in duration-700 hover:scale-300"/>
            </div>
            <div>
              <img src={fotovoltaika} alt="" width={120} height={120} className="ease-in duration-700 hover:scale-300" />
            </div>
           
            <div>
              <img src={kotle} alt="" width={120} height={120} className="ease-in duration-700 hover:scale-300" />
            </div>
          </article>

          <article className="flex gap-8">
            <Link to=""><FaFacebook className="text-3xl ease-in duration-300 hover:scale-150 "  /></Link>
            <Link to=""><FaInstagram className="text-3xl ease-in duration-300 hover:scale-150"/></Link>
            <Link to=""><FaYoutube className="text-3xl ease-in duration-300 hover:scale-150"/></Link>
            <Link to=""><FaLinkedin className="text-3xl ease-in duration-300 hover:scale-150" /></Link>
            
          </article>
        </aside>
        <aside className="grid grid-cols-2 gap-8">
          <article className="bg-cardBackround text-text text-center rounded-lg flex flex-col justify-center items-center py-4">
            <img src={skill} alt="image of skills" width={90} height={90} className="mb-4" />
            <p className="font-bold text-xl">12 rokov+</p>
            <p className="text-lg">skúseností</p>
          </article>
          <article className="bg-cardBackround text-text text-center rounded-lg flex flex-col justify-center items-center py-4">
          <img src={design} alt="image of design" className="mb-4"  width={90} height={90} />
            <p className="font-bold text-xl">500+</p>
            <p className="text-lg">zrealizovaných návrhov</p>
          </article>
          <article className="bg-cardBackround text-text text-center rounded-lg flex flex-col justify-center items-center py-4">
          <img src={service} alt="image of service" className="mb-4"  width={90} height={90} />
      
            <p className="font-bold text-xl">200+</p>
            <p className="text-lg">servisovaných domácností</p>
          </article>
          <article className="bg-cardBackround text-text text-center rounded-lg flex flex-col justify-center items-center py-4">
            <img src={diploma} alt="image of diploma" className="mb-4"  width={90} height={90} />
            <p className="font-bold text-xl">3+</p>
            <p className="text-lg">patentované produkty</p>
          </article>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection3;

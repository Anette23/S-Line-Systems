const Accordion = () => {
  return (
    <>
      <section>
        <h1>Často kladené otázky:</h1>
        <div className="hs-accordion-group">
          <div
            className="hs-accordion active"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-900 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              1. Prečo je dôležité mať spoľahlivú firmu pre kúrenie a chladenie domu?
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <p className="text-gray-800 dark:text-gray-200">
                Každý domov je jedinečne tvorený pre svojho majiteľa, ktorý si ho chce užívať naplno s bezstarostným, spoľahlivým kúrením a chladením v každom ročnom období. Spoľahlivá firma by mala poskytovať odbornú konzultáciu, návrh šitý na mieru, profesionálny prístup počas realizácie aj po nej, technický dohľad počas realizácie kúrenia a chladenia, kompletnú dokumentáciu potrebnú pre kolaudáciu, záručný a pozáručný servis je taktiež nevyhnutnosťou bez ktorej to nejde.
              </p>
            </div>
          </div>
          <div
            className="hs-accordion"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              2. Čo sú najväčšie nástrahy v kúrení a chladení rodinného domu?
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Najväčšie nástrahy v kúrení a chladení v rodinnom dome spočívajú predovšetkým vytvorení jedinečného návrhu pre kúrenie a chladenie. Odborná konzultácia by mala byť samozrejmosťou počas celej realizácie a je nevyhnutná aj po samotnom dokončení kúrenia a chladenia. Ale nájsť niekoho, kto to urobí na profesionálnej úrovni, je dostatočne kompetentný, používa moderné vybavenie, má ochotný personál a pracuje len s kvalitným materiálom pri ktorom garantuje nadštandardnú záruku a ešte aj dodrží stanovený rozpočet a termín odovzdania domu užívateľovi je v dnešnej dobe Vaša nočná mora.
              </p>
            </div>
          </div>
          <div
            className="hs-accordion"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              3. Aké sú hlavné výhody individuálneho návrhu pre kúrenie a chladenie?


              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Individuálny návrh pre kúrenie a chladenie zabezpečuje, že systém bude presne prispôsobený potrebám vášho domu. To znamená efektívnejšie využitie energie, nižšie náklady na prevádzku a maximálny komfort pre vás a vašu rodinu.
              </p>
            </div>
          </div>
          <div
            className="hs-accordion"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              4. Ako si môžem byť istý/á, že firma dodrží rozpočet a termíny projektu?


              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
              Dôležitou súčasťou spoľahlivej firmy pre kúrenie a chladenie je schopnosť dodržiavať stanovené rozpočty a termíny. Naša firma sa zaväzuje k transparentnosti vo finančných záležitostiach a využíva moderné riadiace nástroje, aby zabezpečila, že projekt zostane v rozpočte a bude dokončený v stanovenom termíne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;


const Instructions = () => {
    return (
      <>
        <div className="rounded-xl pt-24 md:pt-32 lg:pt-28" id="instructiones">
          <h1 className="text-center text-text">Ako postupovať?</h1>
          {/* Icon Blocks */}
          <div className="px-4 py-10 sm:px-6 lg:px-10 mx-auto ">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
              {/* Icon Block */}
              <div className="bg-primary p-5 rounded-lg">
                <div className="relative flex justify-center items-center w-12 h-12 bg-background rounded-xl ">
                  <svg
                    className="w-7 h-7 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold underline ">
                  1. Zavoláte nám alebo napíšete
                  </h2>
                  <p className="mt-2 text-text text-[17px] text-normal">
                    +421 907 106 100 <br/>
                    info@slinesystems.sk
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="bg-primary p-5 rounded-lg">
                <div className="relative flex justify-center items-center w-12 h-12 bg-background rounded-xl ">
                <svg
                    className="w-7 h-7 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </div >
                <div className="mt-5">
                  <h2 className="text-xl font-semibold underline">
                    2. Pošlete nám dokumentáciu
                  </h2>
                  <p className="mt-2 text-text text-[17px] text-normal">
                    Pošlite nám pôdorys a rez Vašej stavby v PDF formáte.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="bg-primary p-5 rounded-lg">
                <div className="relative flex justify-center items-center w-12 h-12 bg-background rounded-xl">
                  <svg
                    className="w-7 h-7 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold underline">
                    3. Cenová ponuka
                  </h2>
                  <p className="mt-2 text-text text-[17px] text-normal ">
                    Posúdime a zapracujeme Vaše požiadavky a dohodneme termín realizácie.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="bg-primary p-5 rounded-lg">
                <div className="relative flex justify-center items-center w-12 h-12 bg-background rounded-xl">
                  <svg
                    className="w-7 h-7 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold underline ">
                    4. Užívanie si domova
                  </h2>
                  <p className="mt-2 text-text text-[17px] text-normal">
                    So záručným a pozáručným servisom spoľahlivého kúrenia a
                    chladenia.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Icon Blocks */}
        </div>
      </>
    );
  };
  
  export default Instructions;
  
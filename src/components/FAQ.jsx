

const FAQ = () => {
  return (
    <>
  {/* FAQ */}
  <article className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h1 className="text-text">
      Často kladené otázky:
      </h1>
      
    </div>
    <div className="max-w-2xl mx-auto">
      {/* Accordion */}
      <div className="hs-accordion-group">
        <div
          className="hs-accordion rounded-xl p-6 mb-6 bg-secondary active"
          id="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition text-heatingColor hover:text-gray-400"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
          >
           1. Prečo je dôležité mať spoľahlivú firmu pre kúrenie a chladenie domu?
            <svg
              className="hs-accordion-active:hidden block w-4 h-4 text-accent "
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
              className="hs-accordion-active:block hidden w-3 h-3 text-accent "
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
            <p className="text-text text-base font-normal">
              Yes, you can cancel anytime no questions are asked while you
              cancel but we would highly appreciate if you will give us some
              feedback.
            </p>
          </div>
        </div>

        <div
          className="hs-accordion bg-secondary rounded-xl p-6 mb-6"
          id="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left "
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
          >
            My team has credits. How do we use them?
            <svg
              className="hs-accordion-active:hidden block w-4 h-4 text-accent"
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
              className="hs-accordion-active:block hidden w-4 h-4 text-accent"
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
            <p className="text-text text-base font-normal">
              Once your team signs up for a subscription plan. This is where we
              sit down, grab a cup of coffee and dial in the details.
            </p>
          </div>
        </div>
        <div
          className="hs-accordion bg-secondary rounded-xl p-6 mb-6"
          id="hs-basic-with-title-and-arrow-stretched-heading-three"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition "
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
          >
            How does  pricing work?
            <svg
              className="hs-accordion-active:hidden block w-4 h-4 text-accent"
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
              className="hs-accordion-active:block hidden w-4 h-4 text-accent"
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
            <p className="text-text text-base font-normal">
              Our subscriptions are tiered. Understanding the task at hand and
              ironing out the wrinkles is key.
            </p>
          </div>
        </div>
        <div
          className="hs-accordion bg-secondary rounded-xl p-6 mb-6"
          id="hs-basic-with-title-and-arrow-stretched-heading-four"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
          >
            How secure is Preline?
            <svg
              className="hs-accordion-active:hidden block w-4 h-4 text-accent"
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
              className="hs-accordion-active:block hidden w-4 h-4 text-accent"
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
            id="hs-basic-with-title-and-arrow-stretched-collapse-four"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <p className="text-text text-base font-normal">
              Protecting the data you trust to Preline is our first priority.
              This part is really crucial in keeping the project in line to
              completion.
            </p>
          </div>
        </div>
        <div
          className="hs-accordion bg-secondary rounded-xl p-6 mb-6"
          id="hs-basic-with-title-and-arrow-stretched-heading-five"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
          >
            How do I get access to a theme I purchased?
            <svg
              className="hs-accordion-active:hidden block w-4 h-4 text-accent"
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
              className="hs-accordion-active:block hidden w-4 h-4 text-accent"
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
            id="hs-basic-with-title-and-arrow-stretched-collapse-five"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
          >
            <p className="text-text text-base font-normal">
              If you lose the link for a theme you purchased,
              got you covered. You can login to your account, tap your avatar in
              the upper right corner, and tap Purchases. If you  create a
              login <optgroup></optgroup> remember the information, you can use our handy
              Redownload page, just remember to use the same email you
              originally made your purchases with.
            </p>
          </div>
        </div>
        <div
          className="hs-accordion bg-secondary rounded-xl p-6"
          id="hs-basic-with-title-and-arrow-stretched-heading-six"
        >
          <button
            className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
          >
            Upgrade License Type
            <svg
              className="hs-accordion-active:hidden block w-4 h-4 text-accent"
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
              className="hs-accordion-active:block hidden w-4 h-4 text-accent"
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
            id="hs-basic-with-title-and-arrow-stretched-collapse-six"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
          >
            <p className="text-text text-base font-normal">
              There may be times when you need to upgrade your license from the
              original type you purchased and we have a solution that ensures
              you can apply your original purchase cost to the new license
              purchase.
            </p>
          </div>
        </div>
      </div>
      {/* End Accordion */}
    </div>
  </article>
  {/* End FAQ */}
</>

  )
}

export default FAQ
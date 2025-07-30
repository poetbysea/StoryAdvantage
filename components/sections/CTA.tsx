import React from 'react';

const CTA = () => {
  return (
    <section className="bg-primary-midnight">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-dawn sm:text-4xl font-serif">
          Ready to redefine your acquisition strategy?
          <br />
          Start your journey with us today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-secondary-dark-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-medium-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-light-gray"
          >
            Request a Demo
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-primary-dawn">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

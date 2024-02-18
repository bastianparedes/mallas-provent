import ids from '../../config/id';
import React from 'react';
import Image from 'next/image';
import Product from './Product.webp';

const Component = () => {
  return (
    <section
      className="w-full mt-32 px-10 py-12 flex gap-20 justify-center items-center lg:px-5 lg:mt-36 lg:gap-0 md:mt-24 md:flex-col md:gap-10"
      id={ids.hero}
    >
      <div className="flex flex-col w-1/3 gap-10 lg:w-1/2 md:w-auto md:gap-5">
        <h1 className="text-6xl font-bold md:text-5xl">
          Tu familia <span className="text-lime-600">protegida</span> siempre
        </h1>
        <p className="text-2xl md:text-xl">
          Mallas de seguridad para ventanas y balcones. Brindamos seguridad en
          el espacio más importante de tu vida, tu hogar.
        </p>
        <div className="flex gap-8">
          <a
            className="border-2 border-solid border-orange-400 bg-orange-400 text-white text-center rounded-lg py-3 px-6 text-lg font-semibold no-underline lg:px-2"
            href={'#' + ids.products}
          >
            Ver mangas
          </a>
          <a
            className="border-2 border-solid border-orange-400 bg-white text-orange-400 text-center rounded-lg py-3 px-6 text-lg font-semibold no-underline  lg:px-2"
            href={'#' + ids.contact}
          >
            Contáctame
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/3 aspect-square relative rounded-full overflow-hidden border-2 border-black lg:w-1/2 md:w-auto">
        <Image
          alt="Product"
          className="object-contain w-full h-full"
          placeholder="blur"
          src={Product}
        />
      </div>
    </section>
  );
};

export default Component;

'use client';

import { useState } from 'react';
import Modal from './Modal';

const Component = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="mt-10 font-extrabold">
        <h1 className="text-center text-3xl">Contáctanos</h1>
        <ul className="flex justify-center gap-10">
          <li className="flex">
            <a
              className="border-2 border-solid border-lime-500 bg-lime-500 text-white text-center rounded-lg py-3 px-6 text-lg font-semibold no-underline lg:px-2"
              href="https://www.instagram.com/mallas_provent/"
              rel="noopener"
              target="_blank"
            >
              Ir a Instagram
            </a>
          </li>
          <li className="flex">
            <button
              className="border-2 border-solid border-lime-500 bg-white text-lime-500 text-center rounded-lg py-3 px-6 text-lg font-semibold no-underline lg:px-2"
              onClick={openModal}
            >
              Enviar mensaje
            </button>
          </li>
        </ul>
      </section>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Component;

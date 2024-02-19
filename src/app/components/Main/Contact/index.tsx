'use client';

import X from '../../icons/X';
import { useState } from 'react';

const Component = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [message, setMessage] = useState('');

  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(event.target.value);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message);
    closeModal();
  };

  return (
    <>
      <section></section>
      {isModalOpen && (
        <div
          className="w-svw h-svh bg-gray-500/80 fixed top-0 left-0 z-10 flex items-center justify-center"
          /* onClick={closeModal} */
        >
          <div className="bg-white relative rounded-md p-4">
            <button
              className="rounded-full flex items-center justify-center text-3xl absolute top-0 right-0 bg-inherit border-black border-2 translate-x-1/2 -translate-y-1/2"
              onClick={closeModal}
            >
              <X />
            </button>
            <form
              className="flex flex-col justify-center gap-2"
              onSubmit={onSubmit}
            >
              <textarea
                className="resize-none w-96 h-52 text-xl"
                name="textarea"
                onChange={onChangeMessage}
                placeholder="Escribe aquí tu mensaje"
                value={message}
              />
              <input
                className="bg-lime-500 p-3 rounded-md w-auto text-white text-xl"
                type="submit"
                value="Enviar"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Component;

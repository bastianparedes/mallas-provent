'use client';

import initialPictures from './pictures';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Component = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [pictures, setPictures] = useState(initialPictures);

  const durationLoop = 3000;
  const durationMovement = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving(true);

      setTimeout(() => {
        setPictures((previousState) => {
          previousState.push(previousState.shift() as any);
          return [...previousState];
        });
        setIsMoving(false);
      }, durationMovement);
    }, durationLoop);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="px-2">
      <div className="w-full h-52 overflow-hidden">
        <div
          className={`h-full flex gap-9 transition-all ease-linear`}
          style={{
            transform: `translateX(-${isMoving ? 15.25 : 0}rem)`,
            transitionDuration: (isMoving ? durationMovement : 0) + 'ms'
          }}
        >
          {pictures.map((picture, index) => (
            <div className="h-full aspect-square relative" key={index}>
              <Image
                alt={`Picture ${index}`}
                className="object-cover w-full h-full"
                key={index}
                placeholder="blur"
                src={picture}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Component;

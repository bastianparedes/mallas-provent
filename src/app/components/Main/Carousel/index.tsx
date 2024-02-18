import pictures from './pictures';
import Image from 'next/image';

const Component = () => {
  return (
    <section>
      {pictures.map((picture, index) => (
        <Image
          alt={`Picture ${index}`}
          className="object-contain w-full h-full"
          key={index}
          placeholder="blur"
          src={picture}
        />
      ))}
    </section>
  );
};

export default Component;

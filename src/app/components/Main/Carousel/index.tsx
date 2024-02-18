import pictures from './pictures';
import Image from 'next/image';

const Component = () => {
  return (
    <section className="px-2">
      <div className="w-full h-52 overflow-hidden">
        <div className="h-full flex">
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

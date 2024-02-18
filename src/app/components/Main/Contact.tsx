import ids from '../config/id';
import Email from '../icons/Email.svg';
import Facebook from '../icons/Facebook.svg';
import Instagram from '../icons/Instagram.svg';
import Whatsapp from '../icons/Whatsapp.svg';

const Component = () => {
  return (
    <section
      className="flex w-full justify-center py-20 bg-gradient-to-r from-orange-50 to-orange-200 md:py-10"
      id={ids.contact}
    >
      <div className="p-4 w-3/4 mx-auto md:w-full">
        <div className="flex justify-center gap-20 md:flex-col md:gap-5">
          <div className="w-2/3 h-auto flex justify-center items-start flex-col md:w-full">
            <h1 className="text-xl font-bold">¿Quieres comprar?</h1>
            <p className="text-3xl font-bold">
              Si tienes dudas o quieres coordinar la compra, ponte en contacto
              conmigo a través de los siguientes medios
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 text-7xl md:w-full md:m-0">
            <a
              className="text-[#2e2e2e] flex justify-center w-fit md:m-auto"
              href="mailto: abc@example.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Email />
            </a>
            <a
              className="text-[#E1306C] flex justify-center w-fit md:m-auto"
              href="https://www.instagram.com/nankomangas/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="text-[#25d366] flex justify-center w-fit md:m-auto"
              href="https://api.whatsapp.com/send?phone=+56993426163&text=Hola Nanko Mangas!, quiero preguntar por un manga."
              rel="noopener noreferrer"
              target="_blank"
            >
              <Whatsapp />
            </a>
            <a
              className="text-[#316FF6] flex justify-center w-fit md:m-auto"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
// linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);

export default Component;

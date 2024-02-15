import Contact from "./Contact.tsx";
import Hero from "./Hero.tsx";
import About from "./About.tsx";
import Products from "./Products/index.tsx";

const Component = () => {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Contact />
      <Products />
    </main>
  );
};

export default Component;

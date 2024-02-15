// deno-lint-ignore-file no-window-prefix
import { useEffect, useState } from "preact/hooks";

const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const direction = currentScrollY > scrollY ? "down" : "up";
      setScrollDirection(direction);

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return scrollDirection;
};

export default useScrollDirection;

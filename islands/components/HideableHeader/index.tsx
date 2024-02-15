import useScrollDirection from "../../hooks/useScroll.ts";
import Header from "../../../components/Header/index.tsx";
import { useState } from "preact/hooks";

const Component = () => {
  const [showOptions, setShowOptions] = useState(false);
  const switchShowOptions = () =>
    setShowOptions((previousState) => !previousState);
  const scrollDirection = useScrollDirection();
  const showHeader = scrollDirection === "up";

  return (
    <Header
      showHeader={showHeader}
      showOptions={showOptions}
      switchShowOptions={switchShowOptions}
    />
  );
};

export default Component;

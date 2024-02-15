import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const Image = (props: JSX.HTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);
  const [blurHasError, setBlurHasError] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  const { src } = props;
  if (typeof src !== "string") {
    return (
      <img
        {...props}
        loading="lazy"
      />
    );
  }

  const hiddenImageStyle = loaded ? props.style : {
    height: 0,
    position: "absolute",
    visibility: "hidden",
    width: 0,
  };

  const onLoadHandler = () => {
    setLoaded(true);
  };

  const onErrorHandler = () => {
    setBlurHasError(false);
  };

  useEffect(() => {
    if (ref.current?.complete === true) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && blurHasError
        ? (
          <img
            {...props}
            alt={undefined}
            loading="lazy"
            src={"/image/blur/" + props.src}
            onError={onErrorHandler}
          />
        )
        : null}
      <img
        {...props}
        src={"/image/" + props.src}
        style={hiddenImageStyle}
        loading="lazy"
        onLoad={onLoadHandler}
        ref={ref}
      />
    </>
  );
};

export default Image;

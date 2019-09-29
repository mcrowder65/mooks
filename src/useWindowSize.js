import React from "react";

function getSize() {
  /* istanbul ignore next */
  return global.window
    ? {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
      }
    : /* istanbul ignore next */
      { innerHeight: 0, innerWidth: 0, outerHeight: 0, outerWidth: 0 };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;

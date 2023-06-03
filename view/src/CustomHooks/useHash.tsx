import { useEffect, MutableRefObject } from "react";

const useHash = (ref: MutableRefObject<null>) => {
  const { hash } = window.location;
  // console.log(window.location);

  useEffect(() => {
    if (ref.current && hash === `#${(ref.current as HTMLElement).id}`) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
};
export default useHash;

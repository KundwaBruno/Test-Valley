import useWindowResize from './useWindowResize';

const useScreenSizes = () => {
  const { width } = useWindowResize();
  const isMobile = width <= 765;
  const isPC = width >= 462;
  return { isMobile, isPC };
};

export default useScreenSizes;

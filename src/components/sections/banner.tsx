import useScreenSizes from '@/lib/hooks/useScreenSizes';
import { useBannersQuery } from '@/lib/store/api';
import { CaretLeft, CaretRight, CircleNotch, Spinner } from '@phosphor-icons/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const Banner = () => {
  const { data, isLoading } = useBannersQuery();

  const { isPC } = useScreenSizes();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 4000 }),
  ]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const snaps = emblaApi.scrollSnapList();
      setScrollSnaps(snaps);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <CircleNotch className="text-5xl animate-spin text-primary" />
      </div>
    );
  return (
    <div className="relative w-[417px] mx-auto lg:w-full ">
      <div className="absolute inset-0 z-40 hidden lg:flex justify-between pointer-events-none select-none">
        <div className="w-[21%] h-full bg-white bg-opacity-60" />
        <div className="w-[21%] h-full bg-white bg-opacity-60" />
      </div>
      <div className="hidden lg:flex items-center justify-between absolute top-[47%] left-0 z-50 inset-x-0 w-[53%] mx-auto">
        <button
          onClick={scrollPrev}
          className="rounded-full bg-black bg-opacity-50 p-3 text-xl text-white">
          <CaretLeft />
        </button>
        <button
          onClick={scrollNext}
          className="rounded-full bg-black p-3 text-xl bg-opacity-50 text-white">
          <CaretRight />
        </button>
      </div>
      <div ref={emblaRef} className="overflow-hidden flex-1">
        <div className="flex w-full">
          {data?.map(({ mainBannerId, mobileImageUrl, pcImageUrl, title }) => {
            return (
              <div
                key={mainBannerId}
                className="w-full mr-10 flex-grow-0 flex-shrink-0 lg:w-[1000px] select-none">
                <div className="relative h-[197px] lg:h-[340px]">
                  <Image src={isPC ? pcImageUrl : mobileImageUrl} fill alt={title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-4 inset-x-0 z-50">
        <div className="flex items-center justify-center gap-2">
          {scrollSnaps.map((sn, index) => {
            const isActive = selectedIndex === index;
            return (
              <div
                key={sn}
                className={`bg-white ${
                  isActive ? 'opacity-100' : 'opacity-30'
                } w-1 lg:w-2 lg:h-2 h-1 rounded-full`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;

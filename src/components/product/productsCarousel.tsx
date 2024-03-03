import { ICollectionItem } from '@/lib/types/collection';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import ProductCard from './productCard';

const ProductsSlide = ({ items }: { items: ICollectionItem[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, active: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ playOnInit: true, delay: 2500 })],
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative flex-1">
      {items.length > 4 && (
        <div className="hidden lg:flex gap-2 absolute -left-[32%] bottom-0 text-grey text-xl">
          <button onClick={scrollPrev} className="hover:opacity-40">
            <CaretLeft />
          </button>
          <button onClick={scrollNext} className="hover:opacity-40">
            <CaretRight />
          </button>
        </div>
      )}
      <div ref={emblaRef} className="lg:overflow-hidden flex-1">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row w-full justify-between lg:justify-start">
          {items.map((item) => {
            return (
              <div
                key={item.uuid}
                className="w-[49%] lg:flex-grow-0 lg:flex-shrink-0 lg:w-1/4 lg:pr-2">
                <ProductCard publication={item.publication} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlide;

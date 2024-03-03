import { useCollectionsQuery } from '@/lib/store/api';
import ProductsCarousel from '../product/productsCarousel';
import SectionWrapper from '../sectionWrapper';

const HotDeals = () => {
  const { data } = useCollectionsQuery();

  if (!data) return null;

  return (
    <SectionWrapper>
      <div className="pb-20">
        {data?.items.map((section) => {
          const { title, subtitle, items } = section;
          if (items.length !== 0) {
            return (
              <div key={section.id} className="flex flex-col lg:flex-row gap-4 lg:mb-10">
                <div className="pt-16 lg:pt-0 lg:w-56 flex flex-col">
                  <div className="flex-1">
                    <h2 className="font-medium lg:text-2xl">{title}</h2>
                    <span className="text-xs lg:text-sm text-grey">{subtitle}</span>
                  </div>
                </div>
                <ProductsCarousel items={items} />
              </div>
            );
          }
        })}
      </div>
    </SectionWrapper>
  );
};

export default HotDeals;

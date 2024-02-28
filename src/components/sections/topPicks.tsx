import { useShortcutsQuery } from '@/lib/store/api';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../sectionWrapper';

const TopPicks = () => {
  const { data } = useShortcutsQuery();

  if (!data) return null;

  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-between items-center gap-5 py-8 lg:py-20">
        {data?.map((dt) => {
          return (
            <Link
              href={dt.linkUrl}
              className="flex flex-col gap-1 items-center justify-center "
              key={dt.mainShortcutId}>
              <div className="w-12 lg:w-16 h-12 lg:h-16 relative">
                <Image fill className="object-contain" src={dt.imageUrl} alt={dt.title} />
              </div>
              <span className="text-xs text-grey">{dt.title}</span>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default TopPicks;

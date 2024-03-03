import { IPublication } from '@/lib/types/collection';
import { ShareFat, Star } from '@phosphor-icons/react';
import Image from 'next/image';

interface Props {
  publication: IPublication;
}

const ProductCard = (props: Props) => {
  const {
    id,
    isTrial,
    media,
    productName,
    title,
    tagsOnDesc,
    preface,
    prefaceIconUrl,
    rating,
    priceInfo: { discountRate, discountPrice, price },
  } = props.publication;

  const Rating = () => {
    return (
      <div className="flex items-center gap-1 text-[11px] text-black mt-2">
        <Star weight="fill" className="inline" />
        <span>{rating}</span>
      </div>
    );
  };

  const PrefaceTag = () => {
    if (preface && prefaceIconUrl) {
      return (
        <div className="text-xs p-1 bg-white border w-max border-gray-200 text-black mt-2 flex items-center gap-1">
          <Image src={prefaceIconUrl} width={15} height={15} alt={preface} />
          <span className="text-black">{preface}</span>
        </div>
      );
    }
    return null;
  };

  const TagsOnDescription = () => {
    if (tagsOnDesc.length !== 0) {
      return (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tagsOnDesc.map((tag) => {
            return (
              <div className="rounded-xl px-2 py-1 text-[10px] bg-gray-50 w-max" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const Price = () => {
    return (
      <div className="flex items-center text-sm font-medium mt-2">
        {discountRate && <span className="text-red-500">{discountRate}%</span>}
        <span className="text-black">{(discountPrice ?? price)?.toLocaleString('Us')}</span>
      </div>
    );
  };

  const TrialTag = () => {
    if (isTrial) {
      return (
        <div className="text-[10px] absolute bottom-3 left-0 p-1 bg-green rounded text-white">
          <ShareFat className="inline rotate-180 mr-1" weight="fill" />
          리턴 가능
        </div>
      );
    }
    return null;
  };

  return (
    <div className="col-span-1 flex flex-col h-full">
      <div className="h-[200px] relative rounded-xl">
        <Image fill src={media[0].uri} alt={productName} className="object-contain rounded-xl" />
        <TrialTag />
      </div>
      <span className="text-xs lg:text-sm text-black flex-1 line-clamp-2">{title}</span>
      <Price />
      <TagsOnDescription />
      <Rating />
      <PrefaceTag />
    </div>
  );
};

export default ProductCard;

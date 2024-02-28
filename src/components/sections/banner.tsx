import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const carouselData = [
  {
    mainBannerId: 97,
    title: '음향기기 BIG SALE',
    sort: 1,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1707875671502-메인배너_PC_센터_음향기기빅세일.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1707875658252-메인배너_MO_센터_음향기기빅세일.png',
    linkUrl: 'https://www.testvalley.kr/collections/2424',
    startDate: '2024-01-23T08:09:38.000Z',
    endDate: '2024-03-01T01:52:00.000Z',
    creator: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2024-01-23T08:10:19.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 71,
    title: '테벨리턴 기획전',
    sort: 2,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702276829496-메인배너_PC_리턴리뉴프로모션_1101.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702277056711-메인배너_MO_리턴리뉴프로모션_1101.png',
    linkUrl: 'https://www.testvalley.kr/collections/1955',
    startDate: '2023-11-01T04:31:13.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: '2b61436f-312a-4536-8e15-62d451aff3a6',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-11-01T04:31:49.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 52,
    title: '버즈/에어팟 시리즈 단품구매 기획전',
    sort: 3,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1694695101074-메인배너_PC_기본_이어폰유닛기획전.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1694695104016-메인배너_MO_기본_이어폰유닛기획전.png',
    linkUrl: 'https://www.testvalley.kr/collections/1900',
    startDate: '2023-09-14T09:57:42.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-09-14T09:59:18.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 93,
    title: '1월 갤럭시 브랜드관',
    sort: 4,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706760272311-메인배너_PC_갤럭시브랜드관.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706760280764-메인배너_MO_갤럭시브랜드관.png',
    linkUrl: 'https://www.testvalley.kr/collections/2350',
    startDate: '2024-01-16T10:03:24.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: 'aff502d1-4c24-42f5-9e5b-6c1bf70670e4',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2024-01-16T10:08:31.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 99,
    title: '삼성 VIP 가전 ',
    sort: 5,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1708572911270-메인배너_PC_삼성가전시크릿2.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1708572918205-메인배너_MO_삼성가전시크릿2.png',
    linkUrl: 'https://www.testvalley.kr/collections/253',
    startDate: '2024-02-22T03:34:51.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: 'aff502d1-4c24-42f5-9e5b-6c1bf70670e4',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2024-02-22T03:39:18.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 82,
    title: '겨울가전 LAST SALE',
    sort: 6,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1703051962944-메인배너_PC.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1703051964861-메인배너_MO.png',
    linkUrl: 'https://www.testvalley.kr/collections/2256',
    startDate: '2023-12-20T04:39:35.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-12-20T04:42:57.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 84,
    title: '테스트밸리가 신규회원의 첫구매를 응원해요!',
    sort: 7,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1703232705925-메인배너_PC_첫구매응원.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1703232712280-메인배너_MO_첫구매응원.png',
    linkUrl: 'https://www.testvalley.kr/collections/2287',
    startDate: '2023-12-22T08:11:24.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-12-22T08:12:26.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 2,
    title: '중고폰 네비게이션페이지',
    sort: 8,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702276839394-메인배너_PC_중고폰특가.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702277050063-메인배너_MO_중고폰특가.png',
    linkUrl: 'https://www.testvalley.kr/renew',
    startDate: '2023-02-20T04:58:12.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:00:17.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 3,
    title: '든든보장-ps5',
    sort: 9,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1694425932765-메인배너__PC_든든보장_ps5.jpg',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1694425936813-메인배너_MO_든든보장_ps5.jpg',
    linkUrl: 'https://www.testvalley.kr/product/P010021002S000100001?prdType=1',
    startDate: '2023-02-20T04:58:12.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:00:56.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
  {
    mainBannerId: 1,
    title: 'NEW FACE 새로 들어왔어요',
    sort: 10,
    pcImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702623364960-메인배너_PC_기본_서브타이틀 1줄2줄.png',
    mobileImageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702623366922-메인배너_MO_기본_서브타이틀 1줄2줄.png',
    linkUrl: 'https://www.testvalley.kr/collections/274',
    startDate: '2023-02-20T04:58:12.000Z',
    endDate: '9999-12-23T00:00:00.000Z',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T04:59:26.000Z',
    updatedAt: '2024-02-27T09:54:07.000Z',
    deletedAt: null,
  },
];

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
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

  return (
    <div className="relative">
      <div ref={emblaRef} className="embla">
        <div className="embla__container">
          {carouselData.map((bnn) => {
            return (
              <div key={bnn.mainBannerId} className="embla__slide mr-7">
                <div className="relative h-[197px]">
                  <Image src={bnn.mobileImageUrl} fill className="object-contain" alt={bnn.title} />
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
                } w-1 h-1 rounded-full`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../sectionWrapper';

const data = [
  {
    mainShortcutId: 1,
    title: '갤럭시 할인',
    sort: 1,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1705641890698-갤럭시모음2.jpg',
    linkUrl: 'https://www.testvalley.kr/collections/2350',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'aff502d1-4c24-42f5-9e5b-6c1bf70670e4',
    deleter: null,
    createdAt: '2023-02-20T05:05:19.000Z',
    updatedAt: '2024-01-19T05:26:37.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 3,
    title: '최상급 중고',
    sort: 2,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1696897356049-검증된중고.jpg',
    linkUrl: 'https://www.testvalley.kr/search?prdType=2',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:06:56.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 2,
    title: '중고폰 특가',
    sort: 3,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1686113231690-중고폰특가.jpg',
    linkUrl: 'https://www.testvalley.kr/renew',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:06:33.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 4,
    title: '판매하기',
    sort: 4,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1686113280689-중고판매.jpg',
    linkUrl: 'https://abr.ge/sp9jbc',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:07:23.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 5,
    title: '서비스 소개',
    sort: 5,
    imageUrl: 'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1686113309184-가이드.jpg',
    linkUrl: 'https://www.testvalley.kr/service-guide',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:07:56.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 6,
    title: '게임기기',
    sort: 6,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1686113334374-게임기기.jpg',
    linkUrl: 'https://www.testvalley.kr/search?categoryId=8',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:08:49.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 8,
    title: '애플',
    sort: 7,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1703147244421-애플 (1).jpg',
    linkUrl: 'https://www.testvalley.kr/collections/1467',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: '1d0d13f6-d91e-42d9-85d8-c18e08a474f3',
    deleter: null,
    createdAt: '2023-02-20T05:09:45.000Z',
    updatedAt: '2023-12-26T01:25:16.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 9,
    title: '겨울SALE',
    sort: 8,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1703208113742-계절가전(겨울).jpg',
    linkUrl: 'https://www.testvalley.kr/collections/2256',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:10:19.000Z',
    updatedAt: '2023-12-22T08:13:58.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 7,
    title: '스마트폰',
    sort: 9,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1686113345809-스마트폰.jpg',
    linkUrl: 'https://www.testvalley.kr/search?categoryId=49',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:09:21.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
  {
    mainShortcutId: 10,
    title: '전체 보기',
    sort: 10,
    imageUrl:
      'https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1686113392813-전체보기.jpg',
    linkUrl: 'https://www.testvalley.kr/search',
    creator: '225fcc0f-90bb-4d42-8179-ec6b5c6adec2',
    updater: 'c0335dba-772b-4e5e-b71c-05b426e69a92',
    deleter: null,
    createdAt: '2023-02-20T05:11:08.000Z',
    updatedAt: '2023-12-22T01:22:40.000Z',
    deletedAt: null,
  },
];

const TopPicks = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-between items-center gap-5 my-8">
        {data.map((dt) => {
          return (
            <Link
              href={dt.linkUrl}
              className="flex flex-col gap-1 items-center justify-center "
              key={dt.mainShortcutId}>
              <div className="w-12 h-12 relative">
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

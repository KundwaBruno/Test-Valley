import SectionWrapper from '@/components/sectionWrapper';
import { Bell, Heart, House, List, MagnifyingGlass, User } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
  {
    label: '홈',
    icon: <House weight="fill" />,
    href: '#',
  },
  {
    label: '홈',
    icon: <MagnifyingGlass />,
    href: '#',
  },
  {
    label: '카테고리',
    icon: <List />,
    href: '#',
  },
  {
    label: '좋아요',
    icon: <Heart />,
    href: '#',
  },
  {
    label: '마이페이지',
    icon: <User />,
    href: '#',
  },
];

const NavBar = () => {
  const FooterNav = () => {
    return (
      <div className="fixed bottom-0 py-3 flex items-center inset-x-0 justify-around text-grey bg-white">
        {footerLinks.map(({ href, icon, label }, index) => {
          const isActive = index === 0;
          return (
            <Link
              key={index}
              href={href}
              className={`flex flex-col gap-1 items-center justify-center ${
                isActive && 'text-primary'
              }`}>
              <span className="text-2xl">{icon}</span>
              <span className="text-xs">{label}</span>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <SectionWrapper className="transition-all duration-200 w-full py-3">
      <div className="flex justify-between items-center">
        <div className="relative font-bold text-2xl text-primary">
          <Link href={'/'}>TestValley</Link>
        </div>
        <div className="flex items-center text-2xl text-grey gap-4">
          <Bell />
          <MagnifyingGlass />
        </div>
      </div>
      {/* <FooterNav /> */}
    </SectionWrapper>
  );
};

export default NavBar;

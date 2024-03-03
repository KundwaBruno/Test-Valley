import SectionWrapper from '@/components/sectionWrapper';
import navLinks from '@/lib/constants/links';
import { ArchiveTray, Bell, MagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SearchInput = () => {
  return (
    <div className="hidden lg:flex items-center gap-2 border rounded py-2 px-3 focus:border-primary">
      <MagnifyingGlass weight="bold" className="inline" />
      <input className="outline-none min-w-[250px]" placeholder="최근 검색 내용이 없어요" />
    </div>
  );
};

const NavBar = () => {
  const FooterNav = () => {
    return (
      <div className="fixed bottom-0 py-3 flex items-center inset-x-0 justify-around text-grey bg-white z-50 lg:hidden">
        {navLinks.map(({ href, icon, label }, index) => {
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
    <SectionWrapper className="transition-all duration-200 w-full">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center gap-2">
          <div className="relative font-bold text-2xl">
            <Link href={'/'}>
              <Image
                src="/assets/svgs/logo.svg"
                width={130}
                height={50}
                className="object-contain"
                alt="Test Valley"
              />
            </Link>
          </div>
          <span className="text-primary hidden lg:inline-block">카테고리</span>
        </div>
        <SearchInput />
        <div className="hidden lg:flex items-center divide-x-2">
          <ArchiveTray className="inline mr-2 text-3xl" />
          <button className="pl-3 font-medium text-sm">로그인 / 회원가입</button>
        </div>
        <div className="flex items-center text-2xl text-grey gap-4 lg:hidden">
          <Bell />
          <MagnifyingGlass />
        </div>
      </div>
      {/* <FooterNav /> */}
    </SectionWrapper>
  );
};

export default NavBar;

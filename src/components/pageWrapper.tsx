import Footer from '@/components/footer';
import NavigationBar from '@/components/nav';
import React, { FC, Fragment, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="dark:bg-black bg-white">
        <NavigationBar />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default PageWrapper;

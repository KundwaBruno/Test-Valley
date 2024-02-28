import NavigationBar from '@/components/nav';
import React, { FC, Fragment, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <Fragment>
      <NavigationBar />
      {children}
    </Fragment>
  );
};

export default PageWrapper;

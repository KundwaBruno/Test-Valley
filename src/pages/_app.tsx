import Meta from '@/components/meta';
import RouteChangeLoader from '@/components/routeChangeLoader';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => {


  return (
      <main className={inter.className}>
        <Meta />
        <RouteChangeLoader />
        <Component {...pageProps} />
      </main>
  );
};

export default MyApp;

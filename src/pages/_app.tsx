import Meta from '@/components/meta';
import RouteChangeLoader from '@/components/routeChangeLoader';
import { store } from '@/lib/store';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Meta />
        <RouteChangeLoader />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

export default MyApp;

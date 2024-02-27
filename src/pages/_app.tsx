import Meta from '@/components/meta';
import RouteChangeLoader from '@/components/routeChangeLoader';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => {

  const consoleStyle =
    'background-color: black; color: white; font-style: italic; border: 2px solid white; border-radius: 10px; padding: 10px; font-size: 1.3em;';
  console.log(
    '%c A NextJs + Typescript with TailwindCss Template :)',
    consoleStyle,
  );

  return (
    <ThemeProvider attribute="class">
      <main className={inter.className}>
        <Meta />
        <RouteChangeLoader />
        <Analytics />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;

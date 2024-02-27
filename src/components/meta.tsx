import Head from 'next/head';


const data = {
  full__name: 'Template',
  homeDescription: 'NextJs, Typescript and TailwindCss Template',
  prodUrl: 'https://yourLinkHere.com',
  meta__img: 'This is the meta image'
}

const Meta = () => {
  const { full__name, homeDescription, prodUrl, meta__img } = data;

  return (
    <Head>
      <title>{full__name}</title>
      <link rel="shortcut icon" href="/logo.svg" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      {/* <!-- Primary Meta Tags --> */}
      <title>{full__name}</title>
      <meta name="title" content={full__name} />
      <meta name="description" content={homeDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={prodUrl} />
      <meta property="og:title" content={full__name} />
      <meta property="og:description" content={homeDescription} />
      <meta property="og:image" content={meta__img} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={prodUrl} />
      <meta property="twitter:title" content={full__name} />
      <meta property="twitter:description" content={homeDescription} />
      <meta property="twitter:image" content={meta__img} />
    </Head>
  );
};

export default Meta;

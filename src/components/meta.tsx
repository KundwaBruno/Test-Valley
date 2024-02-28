import Head from 'next/head';

const data = {
  full__name: 'TestValley',
  homeDescription: 'TestValley Description will go here',
  prodUrl: 'https://testValley.com',
  meta__img: 'meta image url go here',
};

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

      <title>{full__name}</title>
      <meta name="title" content={full__name} />
      <meta name="description" content={homeDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={prodUrl} />
      <meta property="og:title" content={full__name} />
      <meta property="og:description" content={homeDescription} />
      <meta property="og:image" content={meta__img} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={prodUrl} />
      <meta property="twitter:title" content={full__name} />
      <meta property="twitter:description" content={homeDescription} />
      <meta property="twitter:image" content={meta__img} />
    </Head>
  );
};

export default Meta;

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={'public/fonts/BeausiteClassicBold.woff2'}
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={'public/fonts/BeausiteClassicMedium.woff2'}
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={'public/fonts/BeausiteClassicRegular.woff2'}
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

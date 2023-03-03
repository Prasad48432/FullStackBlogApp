import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <body className='dark:bg-[#0b192f] bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

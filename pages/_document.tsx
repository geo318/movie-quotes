import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <Html lang='en'>
      <Head />
      <body className='font-helvetica scroll-smooth text-white min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

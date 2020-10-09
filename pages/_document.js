import { ColorModeScript } from '@chakra-ui/core';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html lang='fr'>
        <Head />
        <body>
          <ColorModeScript initialColorMode='light' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

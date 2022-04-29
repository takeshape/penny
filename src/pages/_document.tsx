import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { locale } from 'config';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// required to use ApolloClient in getStaticProps
import fetch from 'node-fetch';

global.fetch = abortableFetch(fetch).fetch;

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={locale}>
        <Head>
          <link rel="preload" href="/fonts/inter-roman.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link
            rel="preload"
            href="/fonts/inter-italic.var.woff2"
            as="font"
            type="font/woff2"
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
}

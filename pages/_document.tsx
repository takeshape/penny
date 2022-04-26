import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
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
      <Html>
        <Head>
          <link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/roboto-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

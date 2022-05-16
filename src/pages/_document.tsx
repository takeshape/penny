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
        <Head />
        <body className="antialiased font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

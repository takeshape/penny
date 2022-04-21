import Document, { Html, Head, Main, NextScript } from 'next/document';

// required to use ApolloClient in getStaticProps
import fetch from 'node-fetch';
import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

global.fetch = abortableFetch(fetch).fetch;

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

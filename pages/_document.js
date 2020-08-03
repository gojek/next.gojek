import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicon from '~/../../static/favicon.ico';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const description =
        "Gojek is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire.",
      title = 'Gojek',
      name = 'Gojeck',
      url = '/';
    return (
      <Html lang="en">
        <Head>
          {/* The first thing in any HTML file should be the charset */}
          <meta charSet="utf-8" />

          {/* Make the page mobile compatible */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
            integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
            crossorigin="anonymous"
          />

          {/* Allow installing the app to the homescreen */}
          <meta name="application-name" content={name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={name} />
          {/* <meta name="msapplication-config" content="/icons/icon-512x512.png" /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-tap-highlight" content="no" />

          {/* <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-512x512.png" /> */}
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />

          {/* Adding Manifest json */}
          <link rel="manifest" href="/manifest.json" />

          {/* Social media tags */}
          <meta name="description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={name} />
          <meta property="og:url" content={url} />
          {/* <meta property="og:image" content="/icons/icon-152x152.png"></meta> */}

          {/* PWA primary color */}
          <meta name="theme-color" content={'#f7ce55'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

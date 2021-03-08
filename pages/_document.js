import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicon from '~/../../static/favicon.png';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const name = 'Gojek';
    return (
      <Html lang="en">
        <Head>
          {/* here \ is replaced with \\ to overcome html escape character */}
          <script
            type="text"
            dangerouslySetInnerHTML={{
              __html: ` 
     __        __                      _     _      _
     \\ \\      / /__    __ _ _ __ ___  | |__ (_)_ __(_)_ __   __ _
      \\ \\ /\\ / / _ \\  / _' | '__/ _ \\ | '_ \\| | '__| | '_ \\ / _' |
       \\ V  V /  __/ | (_| | | |  __/ | | | | | |  | | | | | (_| |
        \\_/\\_/ \\___|  \\__,_|_|  \\___| |_| |_|_|_|  |_|_| |_|\\__, |
                                                            |___/
    Hard to get into, harder to leave.
    We have no dearth of Hard Technical Problems™, work with us https://gojek.io/careers/
    `,
            }}
          ></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
            integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
            crossOrigin="anonymous"
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
          {/* <meta name="description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={name} />
          <meta property="og:url" content={url} /> */}
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

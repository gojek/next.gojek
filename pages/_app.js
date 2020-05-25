import { useEffect } from 'react';
import Head from 'next/head';
import '~/../../utils/styles/main.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.error('Service worker registration failed', err));
    } else {
      console.log('Service worker not supported');
    }
  }, []);

  return (
    <div>
      <Head>
        {/* default title */}
        <title>Gojeck</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

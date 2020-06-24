import { useEffect, useState } from 'react';
import Head from 'next/head';

import '~/../../utils/styles/main.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.error('Service worker registration failed', err));
    } else {
      console.log('Service worker not supported');
    }
  }, []);

  // to handle app going offline
  typeof window !== 'undefined' &&
    window.addEventListener('offline', function(e) {
      setOffline(true);
    });

  return (
    <div>
      <Head>
        {/* default title */}
        <title>Gojek</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import BarLoader from 'react-spinners/BarLoader';

import '~/../../utils/styles/main.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
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

  // To display loader on routing b/w pages
  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));

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
      <BarLoader size={150} color={'#004758'} loading={loading} width={'100%'} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

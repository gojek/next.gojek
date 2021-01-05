import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../comps/Common/Footer';

import '~/../../utils/styles/main.scss';
import '../utils/styles/blog.scss';
import '../utils/styles/style.scss';
import '../utils/styles/custom.scss';
import '../utils/styles/form.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'react-phone-input-2/lib/style.css';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const [offline, setOffline] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.error('Service worker registration failed', err));
    } else {
      console.log('Service worker not supported');
    }
  }, [pathname]);

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
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;

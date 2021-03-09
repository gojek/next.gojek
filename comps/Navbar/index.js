import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import data from './data.json';
import { data as socialLinks } from '../Common/Footer/data';
import Loader from '~/../../comps/Common/Loader';

function Navbar(props) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // To display loader on routing b/w pages
    Router.events.on('routeChangeStart', (url) => {
      setLoader(true);
    });
    Router.events.on('routeChangeComplete', () => setLoader(false));
    Router.events.on('routeChangeError', () => setLoader(false));
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      if (!scrolled) {
        document.querySelector('.navbar').className =
          'navbar fixed-top navbar-expand-lg bg-white py-3 main-nav shadow-sm';
        setScrolled(true);
      }
    } else {
      document.querySelector('.navbar').className =
        'navbar fixed-top navbar-expand-lg bg-transparent py-3 pt-md-5 main-nav';
      setScrolled(false);
    }
  };

  const logo = () => {
    if (scrolled) {
      return <img src="/img/gojek-logo.svg" alt="GOJEK Tech Logo" />;
    } else if (props.whiteNav) {
      return <img src="/img/gojek-white-logo.svg" alt="GOJEK Tech Logo" />;
    } else {
      return (
        <div>
          <img src="/img/gojek-logo.svg" alt="GOJEK Tech Logo" className="d-none d-md-block" />
          {router.pathname !== '/' && (
            <img src="/img/gojek-logo.svg" alt="GOJEK Tech Logo" className="d-block d-md-none" />
          )}
          {router.pathname === '/' && (
            <img src="/img/gojek-logo.svg" alt="GOJEK Tech Logo" className="d-block d-md-none" />
          )}
        </div>
      );
    }
  };

  const joinUsButton = (item) => {
    if (scrolled) {
      return (
        <Link href={item.link}>
          <a
            className={
              router.pathname === '/careers' || router.pathname === '/careers/all'
                ? 'nav-link nav-links'
                : 'button rounded-pill px-3 py-2'
            }
          >
            {item.name}{' '}
            {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
          </a>
        </Link>
      );
    } else {
      return (
        <Link href={item.link}>
          <a
            className={
              router.pathname === '/careers' || router.pathname === '/careers/all'
                ? 'nav-link nav-links'
                : 'button rounded-pill px-3 py-2'
            }
          >
            {item.name}{' '}
            {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
          </a>
        </Link>
      );
    }
  };

  return (
    <div>
      {loader ? <Loader /> : ''}
      <nav className="navbar fixed-top navbar-expand-lg bg-transparent pt-3 pt-md-5 main-nav">
        <div className="container pt-3 pt-md-0">
          <Link href="/">
            <a className="navbar-brand">{logo()}</a>
          </Link>

          <button
            className={`btn d-block d-lg-none ${
              props.whiteNav ? (scrolled ? 'text-dark' : 'text-white') : 'text-dark'
            }`}
            onClick={() => handleExpand()}
          >
            <span>
              <i className="fas fa-bars fa-1x"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className={`navbar-nav ml-auto ${
                props.whiteNav ? (scrolled ? 'blackNav' : 'whiteNav') : 'blackNav'
              }`}
            >
              {data.map((item) => (
                <li
                  className={`nav-item px-3 ${
                    item.link === router.pathname ||
                    ((item.link === '/careers' || item.link === '/blog') &&
                      router.pathname.includes(item.link))
                      ? 'active'
                      : ''
                  }${item.type && item.type === 'button' ? '' : ' '}`}
                  key={item.id}
                >
                  {item.type && item.type === 'button' ? (
                    joinUsButton(item)
                  ) : (
                    <Link href={item.link}>
                      <a className="nav-link nav-links">
                        {item.name}{' '}
                        {item.link === router.pathname ? (
                          <span className="sr-only">(current)</span>
                        ) : (
                          ''
                        )}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {expanded ? (
          <div className="text-white bg-black full-height fixed-top pt-3">
            <div className="container pt-3 d-block" style={{ padding: '.5rem 1rem' }}>
              <div className="d-flex justify-content-between pb-5">
                <a className="navbar-brand" href="/">
                  <img
                    src="/img/gojek-white-logo.svg"
                    alt="Gojek"
                    className="img-fluid footer-logo text-left"
                    style={{ height: '2rem' }}
                  />
                </a>
                <button className="btn text-white text-right" onClick={() => setExpanded(false)}>
                  <img src="/img/cross.svg" alt="close button" />
                </button>
              </div>

              <ul className="list-unstyled mobile-menu text-center">
                {data.map((data, i) => (
                  <li className="pb-5" key={i}>
                    <Link href={data.link}>
                      <a className="text-white">{data.name}</a>
                    </Link>
                  </li>
                ))}
                <li className="pb-5 text-white d-block" key="connect-with-us">
                  <p className="mb-0">Connect with us 👇</p>
                  <ul className="list-inline pt-5 d-flex justify-content-around">
                    {socialLinks.socialLinks.map((socialMedia, i) => (
                      <li className="list-inline-item " key={i}>
                        <a
                          className="text-white social-icon"
                          href={socialMedia.link}
                          target="_blank"
                          title={socialMedia.name}
                        >
                          <img src={socialMedia.icon} alt={socialMedia.title} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ''
        )}
      </nav>
    </div>
  );
}
export default Navbar;

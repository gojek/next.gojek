import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Links from '~/../../comps/Common/Footer/Links';

import data from './data.json';

function Navbar(props) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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
              router.pathname === '/jobs' || router.pathname === '/jobs/all'
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
              router.pathname === '/jobs' || router.pathname === '/jobs/all'
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
            {!scrolled && router.pathname === '/' && (
              <i className="fas fa-bars fa-1x text-dark"></i>
            )}
            {!scrolled && router.pathname !== '/' && (
              <i className="fas fa-bars fa-1x text-dark"></i>
            )}
            {scrolled && <i className="fas fa-bars fa-1x"></i>}
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
                  (router.pathname === '/jobs/all' && item.link === '/jobs') ||
                  (router.pathname === '/blog/all' && item.link === '/blog')
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
        <div className="fixed-top text-white footer smNav py-4 text-left">
          <div class="pl-4">
            <Links navbar onClose={handleExpand} />
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
}
export default Navbar;

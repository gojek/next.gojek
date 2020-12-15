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
      return <img src="/img/gojek-logo.svg" alt="GOJEK Tech Logo" />;
    }
  };

  const joinUsButton = (item) => {
    if (scrolled) {
      return (
        <a
          className={
            router.pathname === '/jobs' ? 'nav-link nav-links' : 'button rounded-pill px-3 py-2'
          }
          href={item.link}
        >
          {item.name}{' '}
          {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
        </a>
      );
    } else {
      return (
        <a
          className={
            router.pathname === '/jobs' ? 'nav-link nav-links' : 'button rounded-pill px-3 py-2'
          }
          href={item.link}
        >
          {item.name}{' '}
          {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
        </a>
      );
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-transparent pt-3 pt-md-5 main-nav">
      <div className="container pt-3 pt-md-0">
        <a className="navbar-brand" href="/">
          {logo()}
        </a>

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
                className={`nav-item px-3 ${item.link === router.pathname ? 'active' : ''}`}
                key={item.id}
              >
                {item.type && item.type === 'button' ? (
                  joinUsButton(item)
                ) : (
                  <a className="nav-link nav-links" href={item.link}>
                    {item.name}{' '}
                    {item.link === router.pathname ? (
                      <span className="sr-only">(current)</span>
                    ) : (
                      ''
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {expanded ? (
        <div className="fixed-top text-white footer smNav py-4">
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

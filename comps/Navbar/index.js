import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data.json';

function Navbar(props) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      if (!scrolled) {
        document.querySelector('.navbar').className =
          'navbar fixed-top navbar-expand-lg bg-white pt-3 mb-5 main-nav shadow-sm';
        setScrolled(true);
      }
    } else {
      document.querySelector('.navbar').className =
        'navbar fixed-top navbar-expand-lg bg-transparent pt-5 mb-5 main-nav';
      setScrolled(false);
    }
  };

  const logo = () => {
    if (scrolled) {
      return <img src="/img/gojek-logo.png" alt="Gojek Super app" />;
    } else if (props.whiteNav) {
      return <img src="/img/gojek-white-logo.png" alt="Gojek Super app" />;
    } else {
      return <img src="/img/gojek-logo.png" alt="Gojek Super app" />;
    }
  };

  const joinUsButton = (item) => {
    if (scrolled) {
      return (
        <a className="button rounded-pill px-3 py-2" href={item.link}>
          {item.name}{' '}
          {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
        </a>
      );
    } else {
      return (
        <a className="button rounded-pill px-3 py-2" href={item.link}>
          {item.name}{' '}
          {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
        </a>
      );
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-transparent pt-5 mb-5 main-nav">
      <a className="navbar-brand" href="/">
        {logo()}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
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
                  {item.link === router.pathname ? <span className="sr-only">(current)</span> : ''}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/core';

import logo from '~/../../static/Gojek_Logo_Horizondal.svg';
import whiteLogo from '~/../../static/gojek-white-logo.png';
import styles from '~/../../comps/Navbar/index.module.scss';
import data from './data.json';

function Navbar(props) {
  const router = useRouter();
  const [navbarScrolled, setnavbarScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        !navbarScrolled && setnavbarScrolled(true);
      } else {
        navbarScrolled && setnavbarScrolled(false);
      }
    });
  });

  // To display loader on routing b/w pages
  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));

  const override = css`
    position: fixed;
    top: 0;
    left: 0;
  `;

  return (
    <div>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg fixed-top w-100 py-4 px-3 menu ${
          props.light ? 'light ' : ''
        } ${navbarScrolled ? 'navbarShadow' : 'shadow-none'}`}
        style={{ backgroundColor: navbarScrolled ? props.bg : 'transparent' }}
      >
        <div className={loading ? 'd-block' : 'd-none'}>
          <BarLoader size={150} color={'#004758'} loading={loading} width={'100%'} css={override} />
        </div>
        <Link href="/">
          <a className="navbar-brand">
            <img
              src={props.light ? whiteLogo : whiteLogo}
              width="200"
              alt="Gojek"
              className="img-fluid p-0 ml-0 ml-md-4"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Expand menu"
        >
          <i className="fa fa-bars" style={{ color: props.light ? '#fff' : '#000' }} />
        </button>

        <div className="collapse navbar-collapse text-left" id="main-navbar">
          <ul className="navbar-nav ml-auto">
            {data.map((page, i) => {
              return (
                <li
                  className={`nav-item px-3 active menuItem ${
                    router.pathname == page.routeTo ? `active menuActive` : ''
                  }`}
                  key={i}
                >
                  <Link href={page.routeTo}>
                    <a className={`nav-link menuLink`}>
                      {page.name}
                      {router.pathname == page.routeTo && (
                        <span className="sr-only">(current)</span>
                      )}
                    </a>
                  </Link>
                </li>
              );
            })}
            {props.careers ? (
              <li className={`nav-item px-4 active menuActive menuItem`}>
                <Link href="/careers">
                  <a className={`nav-link menuLink`}>Join Us</a>
                </Link>
              </li>
            ) : (
              <li className={`nav-item pr-4 pl-3 pl-lg-4 joinUs`}>
                <Link href="/careers">
                  <a className="btn rounded-pill text-success bg-white btn-sm px-3">Join Us</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

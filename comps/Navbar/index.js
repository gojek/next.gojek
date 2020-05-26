import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '~/../../static/Gojek_Logo_Horizondal.svg';
import whiteLogo from '~/../../static/gojek-white-logo.png';
import styles from '~/../../comps/Navbar/index.module.scss';
import data from './data.json';

function Navbar(props) {
  const router = useRouter();
  const [navbarScrolled, setnavbarScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        !navbarScrolled && setnavbarScrolled(true);
      } else {
        navbarScrolled && setnavbarScrolled(false);
      }
    });
  });

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg fixed-top w-100 py-4 px-3 ${styles.menu} ${
          props.light ? styles.light : ''
        } ${navbarScrolled ? 'shadow-sm' : 'shadow-none'}`}
        style={{ backgroundColor: navbarScrolled ? props.bg : 'transparent' }}
      >
        <a className="navbar-brand" href="/">
          <img
            src={props.light ? whiteLogo : whiteLogo}
            width="200"
            alt="Gojek"
            className="img-fluid p-0"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Expand menu"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: props.light ? '#fff' : '#000' }} />
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ml-auto">
            {data.map((page, i) => {
              return (
                <li
                  className={`nav-item px-3 active ${styles.menuItem} ${
                    router.pathname == page.routeTo ? `active ${styles.menuActive}` : ''
                  }`}
                  key={i}
                >
                  <Link href={page.routeTo}>
                    <a className={`nav-link ${styles.menuLink}`}>
                      {page.name}
                      {router.pathname == page.routeTo && (
                        <span className="sr-only">(current)</span>
                      )}
                    </a>
                  </Link>
                </li>
              );
            })}
            {props.joinUs ? (
              <li className={`nav-item px-4 active ${styles.menuActive} ${styles.menuItem}`}>
                <Link href="/jobs">
                  <a className={`nav-link ${styles.menuLink}`}>Join Us</a>
                </Link>
              </li>
            ) : (
              <li className={`nav-item pr-4 pl-3 pl-lg-4 ${styles.joinUs}`}>
                <Link href="/jobs">
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

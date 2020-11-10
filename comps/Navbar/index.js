import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data.json';

function Navbar(props) {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg bg-transparent pt-5 mb-5 main-nav">
      <a className="navbar-brand" href="/">
        <img src="/img/gojek-logo.png" alt="Gojek Super app" />
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
        <ul className="navbar-nav ml-auto">
          {data.map((item) => (
            <li
              className={`nav-item px-3 ${item.link === router.pathname ? 'active' : ''}`}
              key={item.id}
            >
              <a
                className={`nav-link ${
                  item.type && item.type === 'button'
                    ? 'button rounded-pill px-3 py-2 text-green-light'
                    : 'nav-links'
                }`}
                href={item.link}
              >
                {item.name} <span className="sr-only">(current)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

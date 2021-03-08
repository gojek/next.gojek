import { data } from './data';
import Link from 'next/link';

function Links(props) {
  const desktopLinks = (
    <div className="row mx-0 pt-5">
      <div className="col-6 col-md-4 pl-md-0">
        <ul className="list-unstyled mb-0">
          {data.firstColumn.map((data, i) => (
            <li className="pb-3" key={i}>
              <Link href={data.link}>
                <a className="text-white">{data.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-md-8">
        <ul className="list-unstyled mb-0">
          {data.secondColumn.map((data, i) => (
            <li className="pb-3" key={i}>
              <Link href={data.link}>
                <a className="text-white">{data.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="list-inline">
          <p>connect with us 👇</p>
          {data.socialLinks.map((socialMedia, key) => (
            <li className="list-inline-item" key={key}>
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
      </div>
    </div>
  );

  const mobileLinks = (
    <div className="py-md-5">
      <ul className="list-unstyled mb-0 row px-4">
        {data.links.map((data, i) => (
          <li className="pb-4 col-6" key={i}>
            <Link href={data.link}>
              <a className="text-white">{data.name}</a>
            </Link>
          </li>
        ))}
        <li className="pb-5 text-white w-100 pl-3" key="connect-with-us">
          <p className="text-center mb-0">connect with us 👇</p>
          <ul className="list-inline pt-4 d-flex justify-content-between">
            {data.socialLinks.map((socialMedia, i) => (
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
      {/* <ul className="list-inline pl-3 pt-3">
        {data.socialLinks.map((socialMedia, key) => (
          <li
            className={`list-inline-item ${key < data.socialLinks.length - 1 ? 'mr-4' : ''}`}
            key={key}
          >
            <a
              className="text-white"
              href={socialMedia.link}
              target="_blank"
              title={socialMedia.name}
            >
              <img src={socialMedia.icon} />
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );

  const navbarLinks = (
    <div className="pt-5">
      <ul className="list-unstyled mb-0 px-4">
        {data.links.map((data, i) => (
          <li className="pb-4" key={i}>
            <a className="text-white" href={data.link}>
              {data.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="list-inline">
        {data.socialLinks.map((socialMedia, key) => (
          <li
            className={`list-inline-item ${key < data.socialLinks.length - 1 ? 'mr-4' : ''}`}
            key={key}
          >
            <a href={socialMedia.link} target="_blank" title={socialMedia.name}>
              <i className={` ${socialMedia.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <React.Fragment>
      <div
        className={`row pt-3 mx-0 ${
          props.navbar
            ? 'justify-content-between px-3'
            : 'justify-content-center justify-content-md-start py-5 py-md-0'
        }`}
      >
        <img src="/img/gojek-white-logo.svg" alt="Gojek" className="img-fluid footer-logo" />
        {props.navbar ? (
          <button className="btn text-white" onClick={() => props.onClose()}>
            <span>
              <i className="fas fa-times"></i>
            </span>
          </button>
        ) : (
          ''
        )}
      </div>
      {props.navbar ? (
        navbarLinks
      ) : (
        <div>
          <div className="d-block d-md-none">{mobileLinks}</div>
          <div className="d-none d-md-block">{desktopLinks}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Links;

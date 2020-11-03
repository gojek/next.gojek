import { data } from './data';

function Footer(props) {
  return (
    <section className="py-5 footer" style={{ backgroundColor: data.bgColor }}>
      <div className="container">
        <img src="/img/gojek-white-logo.png" alt="Gojek" />
        <div className="row mx-0 text-white mt-5">
          <div className="col-md-3 px-0">
            <ul className="list-unstyled">
              {data.firstColumn.map((data, i) => (
                <li className="pb-3" key={i}>
                  {data.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 px-0">
            <ul className="list-unstyled">
              {data.secondColumn.map((data, i) => (
                <li className="pb-3" key={i}>
                  {data.name}
                  {data.socialLinks && (
                    <ul className="list-inline pt-3">
                      {data.socialLinks.map((socialMedia, key) => (
                        <li className="list-inline-item bg-white" key={key}>
                          <a href={socialMedia.link} target="_blank" title={socialMedia.name}>
                            <i className={` ${socialMedia.icon}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 px-0 p-4 boder-pill contact" style={{ backgroundColor: '#000' }}>
            <h5>Our stories in your inbox</h5>
            <form>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control bg-transparent border-bottom rounded-0 pl-0"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control bg-transparent border-bottom rounded-0 pl-0"
                    placeholder="Email Id"
                  />
                </div>
              </div>
              <button className="btn rounded-pill bg-green mt-4 px-4 text-white">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-white pt-5 mt-5 text-center">
        {' '}
        Gojek tech | <span>{new Date().getFullYear()}</span> All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;

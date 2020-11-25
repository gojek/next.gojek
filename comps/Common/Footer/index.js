import { data } from './data';

function Footer(props) {
  return (
    <section className="py-5 footer" style={{ backgroundColor: data.bgColor }}>
      <div className="container">
        <div className="row mx-0 text-white mt-5">
          <div className="col-md-6">
            <img src="/img/gojek-tech-white-logo.png" alt="Gojek" className="pt-3" />
            <div className="row pt-5">
              <div className="col-md-4">
                <ul className="list-unstyled">
                  {data.firstColumn.map((data, i) => (
                    <li className="pb-3" key={i}>
                      {data.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-8">
                <ul className="list-unstyled">
                  {data.secondColumn.map((data, i) => (
                    <li className="pb-3" key={i}>
                      {data.name}
                      {data.socialLinks && (
                        <ul className="list-inline pt-3">
                          {data.socialLinks.map((socialMedia, key) => (
                            <li className="list-inline-item" key={key}>
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
            </div>
          </div>
          <div className="col-md-6 px-0 p-5 boder-pill contact" style={{ backgroundColor: '#000' }}>
            <p className="form-text">
              We'll strive to ensure you don’t mute us. Stories from our #SuperApp, straight to your
              WhatsApp.
            </p>
            <form>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control bg-transparent border-bottom rounded-0 pl-0"
                    placeholder="Enter your phone number here"
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
